import { useState } from "react";
function Employeeregistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter employee name");
      return;
    }
    if (email === "") {
      alert("Please enter email");
      return;
    }
    if (phone === "") {
      alert("Please enter phone number");
      return;
    }
    if (department === "") {
      alert("Please select department");
      return;
    }
    if (gender === "") {
      alert("Please select gender");
      return;
    }
    if (salary === "") {
      alert("Please enter salary");
      return;
    }
    alert("Employee Registered Successfully!");
    console.log({
      name,
      email,
      phone,
      department,
      gender,
      salary
    });
  };
  return (
    <div>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /><br />
        <label>Department:</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
        <br /><br />
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <br /><br />
        <label>Salary:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Employeeregistration; 