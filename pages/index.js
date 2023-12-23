import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { animate, motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';



const navigationButtons = (buttonNames) => {
  // declaration
  const [pos, setPos] = useState();
  const [color, setColor] = useState(0);

  const refs = Array.from({ length: buttonNames.length }, () => useRef(null));
  const refFocus = useRef(null);

  const startAnimation = (id) => {
    // set reference to clicked element
    refs[id].current.focus();

    // calculate position
    const computedStyles = window.getComputedStyle(refs[id].current);
    const rect = refs[id].current.getBoundingClientRect();
    const pos = rect.left + parseInt(computedStyles.width) / 2 - 10;

    // re-render and animate
    setPos(pos);
    setColor(id);
  }

  return (
    <>
      {buttonNames.map((name, index) => (
        <motion.div
          key={index}
          className={styles.header_button}
          whileHover={{ cursor: 'pointer' }}
          ref={refs[index]}
          animate={{color: color === index ? 'rgb(33, 242, 103)' : 'rgb(123, 134, 138)'}}

          onClick={() => {
            startAnimation(index);
          }}
        >
          {name}
        </motion.div>
      ))}


      <motion.div
        className={styles.navIndicator}
        ref={refFocus}

        animate={{left: pos+'px'}}
      />
    </>
  )
}

const answerButtons = () => {
  let questions = {
    id: 0,
    answer: 'Multiple Times a day',
    weight: 5,
    type: 'multiple'
  };


  return (
    <>
      <div></div>
      <div >
        {questions.answer}
      </div>
    </>
  )
}




export default function Home() {


  return (
    <>


      


      <div className={styles.hero}>

        <h1>Social Media</h1>
        <h2>Your click, your responsiblity</h2>
        <h3>discover the carbon impact of social media</h3>

      </div>

      <div className={styles.info_container}>
        <div></div>
        <div></div>
      </div>

      {/* handy hier */}

      <div className={styles.questioneer}>
        <div>
          <div className={styles.questioneerHeading}>How often do you use social media platforms?</div>
          {answerButtons()}

        </div>
      </div>
      
      <div className={styles.header}>

        {navigationButtons(["Home", "Info", "You"])}

      </div>
    </>
  );
}
