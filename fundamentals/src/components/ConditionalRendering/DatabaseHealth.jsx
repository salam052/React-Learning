const DatabaseHealth = ({
  databaseName,
  isOnline,
  connectionUsage,
}) => {
  return (
    <div>
      <h2>Database Health</h2>

      <p>Database name: {databaseName}</p>

      <p>
        Status: {isOnline ? "Online" : "Offline"}
      </p>

      <p>Connection usage: {connectionUsage}%</p>

      {connectionUsage > 80 && (
        <p style={{ color: "red" }}>
          Warning: High connection usage
        </p>
      )}
    </div>
  );
};

export default DatabaseHealth;