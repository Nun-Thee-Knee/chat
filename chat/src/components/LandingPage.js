import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[100vh] bg-fuchsia-950 gap-10 flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-white">UNIVERSAL CHAT APP</h1>
      <div className="flex gap-5">
        <a href="/chat" className="hover:bg-fuchsia-800 bg-fuchsia-600 p-3 text-white font-bold rounded-xl">
          Get Started
        </a>
        <a href="/demo" className="hover:bg-fuchsia-800 bg-fuchsia-600 p-3 text-white font-bold rounded-xl">
          Demo
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
