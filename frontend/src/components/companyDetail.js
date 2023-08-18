import React from "react";

export default function companyDetail(company) {
  return (
    <div>
      <h4>{company.name}</h4>
      <h6>{company.size}</h6>
    </div>
  );
}
