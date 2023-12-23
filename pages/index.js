import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';

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


const questioneer = () => {

  const {data,error} = useSWR("data/questions.json", (url) => fetch(url).then((res) => res.json()));

  const [page, setPage] = useState(0);
  const switchpage = () => {
      if (nextClicked && page < data.questions.length) {
          setPage(page + 1);
      }
      else if (prevClicked && page > 0) {
          setPage(page - 1);
      }
  }

  const json = data.questions[page];

  const title = json.title;
  const type = json.type;


  return (
    <>
    <div className={styles.questioneer}>
      <div className={styles.questioneer_box}>
        <h3 className={styles.questioneer_heading}>{title}</h3>
        <div>
          {questioneerAnswers(json)}
        </div>

        <div className={styles.questioneer_buttons}>
          <div className={styles.prevButton}></div>
          <div className={styles.nextButton}></div>
        </div>
      
        <div className={styles.currentPageIndex}>{page + 1} / {data.questions.length}</div>
      </div>
    </div>
    </>
  )
}

const questioneerAnswers = (json) => {
  const answers = json.answers;

  return (
    <>
      {answers.map((value) => (
        <div className={styles.questioneer_answer_container}>
          <div className={styles.questioneer_answer_button}></div>
          <div className={styles.questioneer_answer_text}>{value.answer}</div>
        </div>
      ))}
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

      {questioneer()}
      
      <div className={styles.header}>

        {navigationButtons(["Home", "Info", "You"])}

      </div>
    </>
  );
}
