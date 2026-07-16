
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

    </div>
  );
};

export default ServerList;