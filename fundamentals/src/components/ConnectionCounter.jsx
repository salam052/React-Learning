import { useState } from "react";

const ConnectionCounter = () => {
  const [connections, setConnections] = useState(10);

  const addConnection = () => {
    setConnections(
      (previousConnections) => previousConnections + 1
    );
  };

  const removeConnection = () => {
    setConnections(
      (previousConnections) => Math.max(0, previousConnections - 1)
    );
  };

  const resetConnections = () => {
    setConnections(10);
  };

  return (
    <div>
      <h2>Active connections: {connections}</h2>

      <button onClick={addConnection}>
        Add Connection
      </button>

      <button onClick={removeConnection}>
        Remove Connection
      </button>

      <button onClick={resetConnections}>
        Reset Connections
      </button>
    </div>
  );
};

export default ConnectionCounter;