import React from "react";
import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.994162098565!2d37.630640548942445!3d55.71354052737014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b22a91ac945%3A0xf19f72681321ff46!2sIThub%20college!5e0!3m2!1sru!2sfr!4v1729609268083!5m2!1sru!2sfr"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
