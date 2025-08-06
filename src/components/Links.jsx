import React from "react";
// src/components/Links.jsx

// Assuming Links is a component that renders the user's links
function Links({github,linkedin}) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
