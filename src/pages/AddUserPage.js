import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function AddUserPage() {
  const navigate = useNavigate();
  async function addUser(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      major: e.target.major.value,
      salary: e.target.salary.value,
    };

    const res = await fetch(
      "https://6651a88520f4f4c4427850fb.mockapi.io/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    navigate("/users");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Add new user</h1>
        <form onSubmit={addUser}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input name="name" type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Major</label>
            <input name="major" type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Salary</label>
            <input name="salary" type="number" class="form-control" />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUserPage;
