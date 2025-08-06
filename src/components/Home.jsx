import React from "react";
// src/components/Home.jsx
// Assuming Home is a component that displays the user's name and city
function Home({color, name, city}) {
// Assuming color is a prop that sets the text color
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
