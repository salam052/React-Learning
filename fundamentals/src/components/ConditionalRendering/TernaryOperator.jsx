const ServerStatus = ({ isOnline }) => {
  return (
    <div>
      <h2>Database Server</h2>

      <p>
        Status: {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default ServerStatus;