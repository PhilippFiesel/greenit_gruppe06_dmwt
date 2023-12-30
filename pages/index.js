import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { animate, motion } from "framer-motion";

import Navigation, { navigationButtons } from './components/navigationButtons.js';
import { questioneer } from './components/questioneer.js';
import Info, { info } from './components/info.js';
import Phone, { phone } from './components/phone.js';
import ContactForm, {Post} from './components/post.js';
import Questioneer from './components/questioneer';
import { useRef } from 'react';

let result = 0;


export default function Home() {
  const ref = useRef(null);
  return (
    <>
      <div className={styles.hero}>

        <h1>Social Media</h1>
        <h2>Your click, your responsiblity</h2>
        <h3>discover the carbon impact of social media</h3>

      </div>

      <Info />
      <Phone />
      <Questioneer />
      <ContactForm  />
      
      <Navigation buttonNames={["Home", "Information", "Phone", "Questioneer"]} />
    </>
  );
}
