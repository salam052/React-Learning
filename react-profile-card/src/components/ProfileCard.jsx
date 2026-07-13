import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import SkillsList from "./SkillsList";
import ActionButtons from "./ActionButtons";

const ProfileCard = ({ profile }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleConnect = () => {
    setIsConnected((currentStatus) => !currentStatus);
  };

  const handleToggleDetails = () => {
    setShowDetails((currentStatus) => !currentStatus);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((currentTheme) => !currentTheme);
  };

  return (
    <article className={`profile-card ${isDarkMode ? "dark" : "light"}`}>
      <button
        className="theme-button"
        onClick={handleToggleTheme}
        aria-label="Toggle card theme"
      >
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <ProfileHeader
        name={profile.name}
        title={profile.title}
        location={profile.location}
      />

      <p className="profile-summary">{profile.summary}</p>

      <SkillsList skills={profile.skills} />

      {showDetails && (
        <section className="additional-details">
          <h3>Additional Details</h3>

          <p>
            <strong>Experience:</strong> {profile.experience}
          </p>

          <p>
            <strong>Email:</strong> {profile.email}
          </p>
        </section>
      )}

      <ActionButtons
        isConnected={isConnected}
        onConnect={handleConnect}
        showDetails={showDetails}
        onToggleDetails={handleToggleDetails}
      />

      {isConnected && (
        <p className="connection-message">
          You are now connected with {profile.name}.
        </p>
      )}
    </article>
  );
};

export default ProfileCard;