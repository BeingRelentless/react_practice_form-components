export default function Profile({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGender = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <label htmlFor="profile_name">Name</label>
          <input
            name="name"
            type="text"
            id="profile_name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Gender</label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={formData.gender === "man"}
              onClick={handleGender}
            />{" "}
            Man
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={formData.gender === "woman"}
              onClick={handleGender}
            />{" "}
            Woman
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onClick={handleGender}
              checked={formData.gender === "other"}
            />{" "}
            Other
          </label>
        </div>
      </div>
    </>
  );
}
