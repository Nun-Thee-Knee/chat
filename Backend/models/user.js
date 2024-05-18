const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const {createTokenForUser} = require("../services/authentication")

// Define the schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,  // Correct null to required
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash the password
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();  // Ensure next is called
  
  const salt = randomBytes(16).toString("hex");  // Use 'hex' encoding
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  
  user.salt = salt;  // Use user instead of this for clarity
  user.password = hashedPassword;
  
  next();
});

// Static method to match password and generate token
userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await this.findOne({ email });  // Await the result
    if (!user) throw new Error("User does not exist");  // Use Error with capital E
    
    const salt = user.salt;
    const hashedPassword = user.password;
    
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    
    if (hashedPassword !== userProvidedHash)
      throw new Error("User credentials are invalid");  // Use Error with capital E

    // Ensure createTokenForUser is defined or imported
    const token = createTokenForUser(user);  
    return token;
  }
);

// Model creation
const User = mongoose.model("user", userSchema);

module.exports = User;
