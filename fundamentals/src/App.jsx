import './App.css';
import DatabaseHealth from './components/ConditionalRendering/DatabaseHealth';

function App() {
  return (
    <div className="App">
      <DatabaseHealth databaseName="CustomerDB" isOnline={true} connectionUsage={75}  />  
      <DatabaseHealth databaseName="OrdersDB" isOnline={false} connectionUsage={92}  />  
    </div>
  );
}

export default App;
