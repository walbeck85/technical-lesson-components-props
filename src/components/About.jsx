// src/components/About.jsx
import React from "react";
import Links from "./Links";
// Assuming Links is a component that renders the user's links
function About({bio,links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
 <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}
// Assuming Links component takes github and linkedin as props
export default About;
