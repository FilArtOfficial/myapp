import React from 'react';
import instagramIcon from '../../assets/instagram.png'; // Custom social media icons
import whatsappIcon from '../../assets/whatsapp.png';
import Map from '../Map/Map'; // Import the map component
import styles from './Footer.module.css'; // Styles for Footer

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
      <Map /> {/* Add the map component */}
    </footer>
  );
};

export default Footer;
