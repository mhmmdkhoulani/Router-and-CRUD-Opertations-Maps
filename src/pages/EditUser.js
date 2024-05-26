import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function EditUser() {
  const [user, setUser] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `https://6651a88520f4f4c4427850fb.mockapi.io/api/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, [id]);

  async function addUser(e) {
    e.preventDefault();
    const userDetails = {
      name: e.target.name.value,
      major: e.target.major.value,
      salary: e.target.salary.value,
    };

    const res = await fetch(
      `https://6651a88520f4f4c4427850fb.mockapi.io/api/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }
    );
    const data = await res.json();
    navigate("/users");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Edit {user?.name} info</h1>
        <form onSubmit={addUser}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder={user?.name}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Major</label>
            <input
              name="major"
              type="text"
              class="form-control"
              placeholder={user?.major}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Salary</label>
            <input
              name="salary"
              type="number"
              class="form-control"
              placeholder={user?.salary}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
