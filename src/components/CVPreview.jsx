function CVPreview({ personalInfo, experience, education }) {
  return (
    <div className="cv-preview">
      <header className="personal-info">
        {personalInfo.name && <h1>{personalInfo.name}</h1>}
        {personalInfo.email && <p>{personalInfo.email}</p>}
        {personalInfo.phone && <p>{personalInfo.phone}</p>}
      </header>
      <section className="experience"></section>
    </div>
  );
}

//   const [personalInfo, setPersonalInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [education, setEducation] = useState({
//     school: "",
//     titleOfStudy: "",
//     startDate: "",
//     endDate: "",
//   });
//   const [experience, setExperience] = useState({
//     jobTitle: "",
//     employer: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//   });

export default CVPreview;
