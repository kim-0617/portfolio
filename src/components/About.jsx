import { AboutIntro, Focus, Skill } from './';
import { useRef, useState, useEffect } from 'react';

function About() {
  const aboutRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= aboutRef.current.offsetTop - window.innerHeight / 3) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <section id="about" ref={aboutRef}>
      <AboutIntro scroll={scroll} />
      <Focus />
      <Skill />
    </section>
  );
}

export default About;
