import React from "react";
import Skill from "./Skill";

function SkillList({ skills }) {
  return (
    <table id="skills">
      <thead>
        <tr>
          <th>Skills Required</th>
          <th>Skill Frequency</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(skills).map((skill, i) => (
          <Skill skill={skill} count={skills[skill]} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default SkillList;
