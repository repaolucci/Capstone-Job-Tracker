import React from "react";

function Skill({ skill, count }) {
  return (
    <tr>
      <td>{skill}</td>
      <td>{count}</td>
    </tr>
  );
}

export default Skill;
