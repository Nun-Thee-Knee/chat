const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      null: false,
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

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = this.findOne({ email });
    if (!user) throw new error("User does not exist");
    const salt = user.salt;
    const hashedPassword = user.password;
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (hashedPassword !== userProvidedHash)
      throw new error("User credentials are invalid");

    const token = createTokenForUser(user);
    return token;
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
