import React, { useContext } from 'react';
import noteContext from '../Context/Notecontext';

const About = () => {
  const a = useContext(noteContext);

  return (
    <div>
      This is about {a.name} who's age is {a.age}
    </div>
  );
}

export default About;

