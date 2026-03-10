import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import API from "../api/api";
//login added hello


export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const sendRequest = async (userId) => {
    try {
      await API.post("/requests", { toUserId: userId });
      alert("Swap request sent!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Browse Users</h2>

      {users.map((user) => (
        <UserCard
          key={user._id}
          user={user}
          onRequest={sendRequest}
        />
      ))}
    </div>
  );
}