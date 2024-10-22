import React from 'react';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import Map from '../Map/Map';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Phone</h3>
          <p className={styles.cardText}>+7 (499) 350-66-04</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Socials</h3>
          <div className={styles.socialIcons}>
            <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
            <img src={whatsappIcon} alt="Whatsapp" className={styles.socialIcon} />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Address</h3>
          <p className={styles.cardText}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Hours</h3>
          <p className={styles.cardText}>24 hours a day</p>
        </div>
      </div>
      <Map />
    </footer>
  );
};

export default Footer;
