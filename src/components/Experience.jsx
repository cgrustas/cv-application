import Input from "./Input";

function Experience({ data, onChange, onRemove }) {
  const { jobTitle, employer, description, startDate, endDate } = data;

  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <fieldset>
      <legend>{jobTitle || "New Position"}</legend>
      <Input
        label="Job Title"
        name="jobTitle"
        value={jobTitle}
        onChange={handleChange}
      />
      <Input
        label="Employer"
        name="employer"
        value={employer}
        onChange={handleChange}
      />
      <Input
        label="Start Date"
        name="startDate"
        id="experience-start-date"
        type="date"
        value={startDate}
        onChange={handleChange}
      />
      <Input
        label="End Date"
        name="endDate"
        id="experience-end-date"
        type="date"
        value={endDate}
        onChange={handleChange}
      />
      <label htmlFor="job-description">Description</label>
      <textarea
        name="description"
        id="job-description"
        value={description}
        onChange={handleChange}
        placeholder="e.g. Welcomed customers and supported them in locating books"
      ></textarea>
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </fieldset>
  );
}

export default Experience;
