function CVPreview({ personalInfo, experiences, educations }) {
  return (
    <div className="cv-preview">
      <header className="personal-info-preview">
        {personalInfo.name && <h2>{personalInfo.name}</h2>}
        <div className="contact-info">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
        </div>
      </header>
      <section className="experience-preview">
        {experiences.some((exp) => exp.employer || exp.jobTitle) && (
          <h3>Experience</h3>
        )}
        {experiences.map((experience) => (
          <article key={experience.id}>
            {experience.employer && <h4>{experience.employer}</h4>}
            <div className="job-info">
              {experience.jobTitle && <h5>{experience.jobTitle}</h5>}
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
            </div>
            {experience.description && <p>{experience.description}</p>}
          </article>
        ))}
      </section>
      <section className="education-preview">
        {educations.some((edu) => edu.school || edu.titleOfStudy) && (
          <h3>Education</h3>
        )}
        {educations.map((education) => (
          <article key={education.id}>
            {education.school && <h4>{education.school}</h4>}
            <div className="school-info">
              {education.titleOfStudy && <h5>{education.titleOfStudy}</h5>}
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
            </div>
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
