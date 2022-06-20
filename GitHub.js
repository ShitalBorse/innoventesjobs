import React, { Component, useState } from "react";
import axios from "axios";
const GitHub = () => {
  const [data, SetData] = useState[""];
  const [user, SetUser] = useState[[]];
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://github.com/users/${data}/repos`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("Invalid username");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <dl>
          <label>Github Username:</label>

          <dd>
            <input type={"text"} onChange={handleChange} />
          </dd>
          <dd>
            <input type={"submit"} onChange={"submit"} />
          </dd>
        </dl>
        <table>
          <thread>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Description</th>
              <th>Size</th>
            </tr>
          </thread>
          <tbody>
            {Array.isArray(user) &&
              user.map((val, i) => {
                return (
                  <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.language}</td>
                    <td>{val.description}</td>
                    <td>{val.size}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default GitHub;
