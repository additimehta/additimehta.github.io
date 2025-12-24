import React from "react";

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>
    </div>
  );
}
