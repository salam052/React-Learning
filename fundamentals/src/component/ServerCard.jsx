const ServerCard = ({ serverName, databaseType,databaseCount, environment }) => {
  return (
    <div className="server-card">
      <h2>{serverName}</h2>
      <p>DatabaseType: {databaseType}</p>
      <p>Databases: {databaseCount}</p>
      <p>Environment: {environment}</p>
    </div>
  );
};

export default ServerCard;