export default function UserCard({ user, onRequest }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
      <h3>{user.name}</h3>

      <p>
        <strong>Offers:</strong> {user.skillsOffered?.join(", ")}
      </p>

      <p>
        <strong>Wants:</strong> {user.skillsWanted?.join(", ")}
      </p>

      <button onClick={() => onRequest(user._id)}>Request Swap</button>
    </div>
  );
}