import ProfileCard from "./components/ProfileCard";
import profileData from "./data/profileData";


const App = () => {
  return (
<div className="app">
      <main className="app-container">
      <ProfileCard profile={profileData} />
    </main>
</div>
  );
};

export default App;