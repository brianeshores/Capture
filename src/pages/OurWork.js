import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  sliderContainer,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} animate={controls} initial="hidden" variants={fade}>
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        animate={controls2}
        initial="hidden"
        variants={fade}
      >
        <h2>Good Times</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 900px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-postition: top;
  }
`;

const Hide = styled.div`
   {
    overflow: hidden;
  }
`;

const Frame1 = styled(motion.div)`
   {
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #e0841a;
    z-index: 2;
  }
`;

const Frame2 = styled(Frame1)`
  background: #c1da34;
`;

const Frame3 = styled(Frame1)`
  background: #7b69e0;
`;

const Frame4 = styled(Frame1)`
  background: #63204f;
`;

export default OurWork;
