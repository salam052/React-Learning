import './App.css';
import ServerCard from './component/ServerCard';
import ConnectionCounter from './component/ConnectionCounter';

function App() {
  return (
    <div className="App">
      <ServerCard serverName="DB-PROD-01" databaseType="PostgreSQL" databaseCount={15} environment="Production" />
      <ServerCard serverName="DB-STAGE-01" databaseType="MySQL" databaseCount={8} environment="Staging" />
      <ServerCard serverName="DB-DEV-01" databaseType="MongoDB" databaseCount={4} environment="Development" />
      <ConnectionCounter/>
    </div>
  );
}

export default App;
