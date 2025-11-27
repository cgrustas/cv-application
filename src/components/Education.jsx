import Input from "./Input.jsx";

function Education({ data, onChange, onRemove }) {
  const { school, titleOfStudy, startDate, endDate } = data;

  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <fieldset>
      <legend>{school || "New Education"}</legend>
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
        id="education-start-date"
        type="month"
        value={startDate}
        onChange={handleChange}
      />
      <Input
        label="End Date"
        name="endDate"
        id="education-end-date"
        type="month"
        value={endDate}
        onChange={handleChange}
      />
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </fieldset>
  );
}

export default Education;
