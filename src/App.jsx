import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import CVPreview from "./components/CVPreview.jsx";
import "./styles/styles.css";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      jobTitle: "",
      employer: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      titleOfStudy: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function updateExperience(updatedExperience) {
    setExperiences(
      experiences.map((experience) => {
        return updatedExperience.id === experience.id
          ? updatedExperience
          : experience;
      })
    );
  }

  function updateEducation(updatedEducation) {
    setEducations(
      educations.map((education) => {
        return updatedEducation.id === education.id
          ? updatedEducation
          : education;
      })
    );
  }

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        jobTitle: "",
        employer: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function addEducation() {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        school: "",
        titleOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function removeExperience(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  function removeEducation(id) {
    setEducations(educations.filter((edu) => edu.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
        {!isEditing && (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </header>
      <section className="form-section">
        {isEditing && (
          <form id="cv-form" onSubmit={handleSubmit}>
            <PersonalInfo data={personalInfo} onChange={setPersonalInfo} />
            <fieldset className="experiences">
              <legend>Experience</legend>
              {experiences.map((exp) => (
                <Experience
                  key={exp.id}
                  data={exp}
                  onChange={updateExperience}
                  onRemove={() => removeExperience(exp.id)}
                />
              ))}
              <button type="button" onClick={addExperience}>
                Add Experience
              </button>
            </fieldset>
            <fieldset className="educations">
              <legend>Education</legend>
              {educations.map((edu) => (
                <Education
                  key={edu.id}
                  data={edu}
                  onChange={updateEducation}
                  onRemove={() => removeEducation(edu.id)}
                />
              ))}
              <button type="button" onClick={addEducation}>
                Add Education
              </button>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        )}
      </section>
      {!isEditing && (
        <section className="preview-section">
          <CVPreview
            personalInfo={personalInfo}
            experiences={experiences}
            educations={educations}
          />
        </section>
      )}
    </div>
  );
}

export default App;
