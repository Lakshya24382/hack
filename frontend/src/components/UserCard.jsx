const UserCard = () => {
  return (
    <div style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
      <h3>User Name</h3>

      <p>Skills Offered: React, Node</p>
      <p>Skills Wanted: UI Design</p>

      <button>Request Swap</button>
    </div>
  );
};

export default UserCard;