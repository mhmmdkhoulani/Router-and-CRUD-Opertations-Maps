import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function UsersPage() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://6651a88520f4f4c4427850fb.mockapi.io/api/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    getUsers();
  }, [users]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Users Page</h1>
        <table className="table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Salary</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>${user.salary}</td>

                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-info">
                    View Details
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/users/delete/${user.id}`}
                    className="btn btn-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
