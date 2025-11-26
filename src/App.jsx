import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
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
