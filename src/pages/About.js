import React, { useState, useEffect } from "react";

const About = (props) => {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  };
  useEffect(() => {
    getAboutData();
// eslint-disable-next-line  
}, []);

  const loaded = () => {
    return (
      <div className="about">
        <h1>{about.name}</h1>
        <h2>{about.email}</h2>
        <p>{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;



