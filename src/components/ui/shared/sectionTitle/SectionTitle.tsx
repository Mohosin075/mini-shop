import React from "react";

const SectionTitle = ({ title, desc } : {title : string, desc ?: string}) => {
  return (
    <div className="w-10/12 md:w-8/12 lg:w-5/12 mx-auto space-y-4 text-center">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
