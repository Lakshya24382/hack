import React from "react";

const Navbar = () => {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"10px 20px", background:"#111", color:"#fff"}}>
      <h2>SkillSwap</h2>
      <div>
        <button>Dashboard</button>
        <button>Profile</button>
        <button>Swaps</button>
      </div>
    </nav>
  );
};

export default Navbar;