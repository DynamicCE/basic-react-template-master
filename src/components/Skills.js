import React from "react";

export default function Skills({ skill }) {
  return (
    <div>
      <ul className="list-none m-0 p-0">
        {skill.map((skill, index) => (
          <li
            key={index}
            className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
