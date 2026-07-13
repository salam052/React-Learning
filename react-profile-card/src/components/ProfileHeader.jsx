const ProfileHeader = ({ name, title, location }) => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <header className="profile-header">
      <div className="profile-avatar">{firstLetter}</div>

      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="location">{location}</p>
      </div>
    </header>
  );
};

export default ProfileHeader;