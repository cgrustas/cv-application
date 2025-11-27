import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import CVPreview from "./components/CVPreview.jsx";

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
      <section className="form-section">
        {isEditing && (
          <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
          </form>
        )}
      </section>
      <section className="preview-section">
        <CVPreview
          personalInfo={personalInfo}
          experiences={experiences}
          educations={educations}
        />
        {!isEditing && (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </section>
    </div>
  );
}

export default App;
