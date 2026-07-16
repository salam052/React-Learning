const DatabaseList = () => {
  const databases = [
    {
      id: 1,
      name: "CustomerDB",
      type: "PostgreSQL",
    },
    {
      id: 2,
      name: "OrdersDB",
      type: "MySQL",
    },
    {
      id: 3,
      name: "LogsDB",
      type: "MongoDB",
    },
  ];

  return (
    <div>
      <h2>Database List</h2>

      {databases.map((database) => (
        <div key={database.id}>
          <h3>{database.name}</h3>
          <p>Type: {database.type}</p>
        </div>
      ))}
    </div>
  );
};

export default DatabaseList;