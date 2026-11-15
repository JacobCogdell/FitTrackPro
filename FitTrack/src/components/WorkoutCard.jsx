import { useState } from "react";

function WorkoutCard({ title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`workout-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => console.log(`Hovered on ${title}`)}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {expanded && (
        <div className="extra-info">
          <p>More details coming soon!</p>
        </div>
      )}
    </div>
  );
}

export default WorkoutCard;
