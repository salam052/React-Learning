const SkillsList = ({ skills }) => {
  return (
    <section className="skills-section">
      <h3>Technical Skills</h3>

      <div className="skills-list">
        {skills.map((skill) => (
          <span className="skill-badge" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;