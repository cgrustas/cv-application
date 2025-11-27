import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Education from "./components/Education.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="app-container">
      <div className="form">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <PersonalInfo data={personalInfo} onChange={setPersonalInfo} />
            <Education data={education} onChange={setEducation} />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default App;
