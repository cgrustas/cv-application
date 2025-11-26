import Input from "./Input.jsx";

function PersonalInfo({ data, onChange }) {
  const { name, email, phone } = data;

  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <Input
        label="Full Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={handleChange}
      />
    </section>
  );
}

export default PersonalInfo;
