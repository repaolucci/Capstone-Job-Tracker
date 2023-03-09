import React from "react";
import Skill from "./Skill";

function SkillList({ skills }) {
  return (
    <table id="skills">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Frequency</th>
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
