import ServerCard from "./ServerCard";

const ServerList = () => {
  const servers = [
    {
      id: 101,
      name: "DB-PROD-01",
      type: "PostgreSQL",
      isOnline: true,
    },
    {
      id: 102,
      name: "DB-STAGE-01",
      type: "MySQL",
      isOnline: false,
    },
  ];

  return (
    <div>
      <h2>Server List</h2>

      <ul>
        {servers.map((server) => (
          <ServerCard
            key={server.id}
            name={server.name}
            type={server.type}
            isOnline={server.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default ServerList;