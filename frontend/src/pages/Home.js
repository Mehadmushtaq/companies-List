import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch("/api/company"); //fecting all data
      const json = await response.json(); //converting to object

      if (response) {
        setCompany(json);
      }
    };

    fetchCompanies(); //calling function
  }, []);

  return (
    <div className="container my-5">
      {company &&
        company.map((comp) => (
          <p key={comp._id} className="border p-2">
            <strong>Name :</strong> {comp.name} <br />
            <strong>Industry :</strong> {comp.industry} <br />
            <strong>Size :</strong>
            {comp.size}
            <br />
            <strong>HeadQuarter :</strong>
            {comp.headQuarter}
            <br />
            <strong>Founded :</strong>
            {comp.founded}
            <br />
          </p>
        ))}
    </div>
  );
}

export default Home;
