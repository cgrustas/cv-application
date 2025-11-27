import Input from "./Input.jsx";

function Education({ data, onChange }) {
  const { school, titleOfStudy, startDate, endDate } = data;

  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <fieldset>
      <legend>Education</legend>
      <Input
        label="School"
        name="school"
        value={school}
        onChange={handleChange}
      />
      <Input
        label="Title of Study"
        name="titleOfStudy"
        value={titleOfStudy}
        onChange={handleChange}
      />
      <Input
        label="Start Date"
        name="startDate"
        type="date"
        value={startDate}
        onChange={handleChange}
      />
      <Input
        label="End Date"
        name="endDate"
        type="date"
        value={endDate}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default Education;
