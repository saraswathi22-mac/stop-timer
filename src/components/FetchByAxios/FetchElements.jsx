import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchElements() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Using Axios to fetch user details
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="user-table-container">
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchElements;
