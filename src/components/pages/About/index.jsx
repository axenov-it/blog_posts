import React from "react";

const weight = ["Weight is invalid", "VolumeGeneral is invalid"];

function About() {
  const res = "hello";

  const result = !weight.length ? <b>{res}</b> : weight.join(" ");

  return (
    <div>
      <h1 className="about-title">About</h1>
      {result}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsa
        libero reiciendis cumque! Animi mollitia alias sed, neque delectus sit
        quos modi est repellendus debitis reiciendis quaerat ratione atque
        itaque!
      </p>
    </div>
  );
}

export default About;
