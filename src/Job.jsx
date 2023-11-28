import React, { useState, useEffect } from "react";
import { FiChevronsRight } from "react-icons/fi";

const url = "https://course-api.com/react-tabs-project";

export const Job = () => {
  const [loading, setLoading] = useState(true);
  const [jobList, setJobList] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-lists">
      <h2>FullStack Web Dev</h2>
      <button>Company name</button>
      <p>December 2015 - Present</p>
      <div className="list">
        <div className="job">
          <FiChevronsRight />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            in ea, provident molestiae quaerat consequuntur repellendus eligendi
            reprehenderit ullam modi? Natus, a! Labore sint, illo non natus
            explicabo, laudantium veritatis, doloremque dolore voluptates et
            officia!
          </p>
        </div>
      </div>
    </div>
  );
};
