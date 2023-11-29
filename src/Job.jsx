import React, { useState, useEffect } from "react";
import { FiChevronsRight } from "react-icons/fi";

const url = "https://course-api.com/react-tabs-project";

export const Job = () => {
  const [loading, setLoading] = useState(true);
  const [jobList, setJobList] = useState([]);
  const [indexValue, setIndexValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h1>Loading ..</h1>;
  }

  const { title, dates, duties, company } = jobList[indexValue];
  console.log(title);

  return (
    <div className="job-lists">
      <h2>{title}</h2>
      <button>{company}</button>
      <h3>{dates}</h3>
      {duties.map((duty) => {
        return (
          <div className="job">
            <FiChevronsRight />
            <h4>{duty}</h4>
          </div>
        );
      })}
    </div>
  );
};
