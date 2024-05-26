import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteUser() {
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteUser() {
      try {
        const response = await fetch(
          `https://6651a88520f4f4c4427850fb.mockapi.io/api/users/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) throw new Error("User Not found to delete");
        const data = await response.json();
        console.log(data);
        navigate("/users");
      } catch (error) {
        setError(error.message);
      } finally {
      }
    }
    deleteUser();
  }, []);
  return (
    <div>
      <h1>Delete User</h1>
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default DeleteUser;
