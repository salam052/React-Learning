import ProfileCard from "./components/ProfileCard";
import profileData from "./data/profileData";

const App = () => {
  return (
    <main className="app-container">
      <ProfileCard profile={profileData} />
    </main>
  );
};

export default App;