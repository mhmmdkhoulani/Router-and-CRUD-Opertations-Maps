import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState();
  const { id } = useParams();

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
  return (
    <div>
      <h1>User Details for {user?.name}</h1>
    </div>
  );
}

export default UserDetails;
