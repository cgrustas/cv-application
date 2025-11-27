function CVPreview({ personalInfo, experiences, educations }) {
  return (
    <div className="cv-preview">
      <header className="personal-info-preview">
        {personalInfo.name && <h1>{personalInfo.name}</h1>}
        {personalInfo.email && <p>{personalInfo.email}</p>}
        {personalInfo.phone && <p>{personalInfo.phone}</p>}
      </header>
      <section className="experience-preview">
        {experiences.some((exp) => exp.employer || exp.jobTitle) && (
          <h2>Experience</h2>
        )}
        {experiences.map((experience) => (
          <article key={experience.id}>
            {experience.employer && <h3>{experience.employer}</h3>}
            {experience.jobTitle && <h4>{experience.jobTitle}</h4>}
            {experience.startDate && experience.endDate && (
              <p>
                <time dateTime={experience.startDate}>
                  {formatDate(experience.startDate)}
                </time>
                {" - "}
                <time dateTime={experience.endDate}>
                  {formatDate(experience.endDate)}
                </time>
              </p>
            )}
            {experience.description && <p>{experience.description}</p>}
          </article>
        ))}
      </section>
      <section className="education-preview">
        {educations.some((edu) => edu.school || edu.titleOfStudy) && (
          <h2>Education</h2>
        )}
        {educations.map((education) => (
          <article key={education.id}>
            {education.school && <h3>{education.school}</h3>}
            {education.titleOfStudy && <h4>{education.titleOfStudy}</h4>}
            {education.startDate && education.endDate && (
              <p>
                <time dateTime={education.startDate}>
                  {formatDate(education.startDate)}
                </time>
                {" - "}
                <time dateTime={education.endDate}>
                  {formatDate(education.endDate)}
                </time>
              </p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

function formatDate(monthString) {
  if (!monthString) return "";
  const [year, month] = monthString.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default CVPreview;
