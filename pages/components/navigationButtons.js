import { useRef, useState, useEffect } from 'react';
import { animate, motion } from "framer-motion";
import styles from '../../styles/Home.module.css';

const calculateIndicator = (current) => {
  switch (current) {
    case 1: return -15 - 75;
    case 2: return +15 + 75;
    case 3: return +45 + 225;
  }
}

const Navigation = (buttons) => {
    const buttonNames = buttons;

    // states for color and position of navigation indicator
    //const [values, setValues] = useState({color: 0, pos: 0});
    const [current, setCurrent] = useState(0);

    const change = (index) => {
      var pos = 0;
      switch(index) {
        case 0: pos = 0; break;
        case 1: pos = 525;break;
        case 2: pos = 1325;break;
        case 3: pos = 2150;break;
      }
      window.scrollTo({
        top: pos,
        behavior: "smooth"
      })
      setCurrent(index);
    }
  
    // const startAnimation = (id) => {
    //   // set reference to clicked element
    //   refs[id].current.focus();
  
    //   // calculate position
    //   const computedStyles = window.getComputedStyle(refs[id].current);
    //   const rect = refs[id].current.getBoundingClientRect();
    //   const pos = rect.left + parseInt(computedStyles.width) / 2 - 10;
  
    //   // re-render and animate
    //   setValues(() => ({
    //     color: id,
    //     pos: pos
    //   }));
    // }
  
    return (
      <div className={styles.header}>
        <div style={{display: "flex", height: "100%"}}>
          {buttonNames.map((name, index) => (
            <motion.div
              key={index}
              className={styles.header_button}
              whileHover={{ cursor: 'pointer' }}
              animate={{color: current === index ? 'rgb(33, 242, 103)' : 'rgb(123, 134, 138)',
            }}
              
              onClick={() => change(index)}
            >
              {name}
            </motion.div>
          ))}
        </div>
        
  
        <motion.div
          className={styles.navIndicator}
          
          style={{x: -225 - 45 - 2.5}}

          animate={{x: calculateIndicator(current)}}

          transition={{ type: "tween", duration: 0.35 }}
        />
      </div>
    )
  }

  export {Navigation};