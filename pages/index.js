import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { motion } from "framer-motion"

export default function Home() {
  return (
    <>

      <div className={styles.header}>

        <motion.div whileHover={{color: 'var(--primary)', cursor: 'pointer'
          
          }}>
          Home
        </motion.div>
        <div>Info</div>
        <div>You</div>

      </div>


      <div className={styles.hero}>

        <h1>Social Media</h1>
        <h2>Your like, your responsiblity</h2>

      </div>
      
    </>
  );
}
