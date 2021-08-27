import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { faqFade, fade } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq ref={element} animate={controls} initial="hidden" variants={fade}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <motion.div
            variants={faqFade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              temporibus!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Daily schedule">
          <motion.div
            variants={faqFade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              temporibus!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different payment methods">
          <motion.div
            variants={faqFade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              temporibus!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <motion.div
            variants={faqFade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              temporibus!
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
