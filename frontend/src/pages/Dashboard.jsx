import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Browse Users</h1>

      {users.map(user => (
        <div key={user._id}>
          <h3>{user.name}</h3>

          <p>Offers: {user.skillsOffered.join(", ")}</p>
          <p>Wants: {user.skillsWanted.join(", ")}</p>

          <button>Request Swap</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;