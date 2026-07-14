
const Profile = ({name, yearsExperience}) => {

  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p> {`${yearsExperience} years of database experience, learning React`} </p>
      
    </div>
  );
};

export default Profile;