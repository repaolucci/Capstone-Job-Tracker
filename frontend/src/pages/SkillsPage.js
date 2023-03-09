import React from "react";
import { Link } from "react-router-dom";
import SkillList from "../components/SkillList";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const history = useHistory();

  const loadJobs = async () => {
    const response = await fetch("/jobs");
    const jobs = await response.json();
    const skills = {};
    jobs.forEach((job) =>
      job.skills.forEach(
        (skill) => (skills[skill] = skills[skill] ? skills[skill] + 1 : 1)
      )
    );
    setSkills(skills);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <>
      <h2>Skills</h2>
      <SkillList skills={skills}></SkillList>
    </>
  );
}

export default SkillsPage;
