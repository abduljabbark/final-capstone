// import React from 'react'
// import Heading from './Heading'
// import HeroImg from './HeroImg'
// import CallAction from './CallAction'

// const DetailBox = () => {
//   return (
//     <div  style={styles.Detailbox}>
//         <Heading/>
//         <HeroImg/>
//         <CallAction/>
//     </div>
//   )
// }
// const styles = {
//     Detailbox: {
//       height:"750px"
       
//     },
// }
// export default DetailBox
import React from 'react';
import './style.css';
import BGIMG from "../../images/home-vendor-pk.webp";

const Heading = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.headingText}>
        You prepare the food, we handle the rest
      </h1>
    </header>
  );
};

const HeroImg = () => {
  return (
    <div style={styles.heroContainer}>
      <img
        src={BGIMG}
        alt="Chef cooking"
        style={styles.heroImage}
      />
    </div>
  );
};

const CallAction = () => {
  return (
    <div
      style={
        window.innerWidth >= 992
          ? styles.cardContainerDesktop
          : window.innerWidth >= 576
          ? styles.cardContainerTablet
          : styles.cardContainerMobile
      }
    >
      <div style={styles.card}>
        <h2>List your restaurant or shop on foodpanda</h2>
        <p>
          Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
        </p>
        <p>
          It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
        </p>
        <p>Interested? Let's start our partnership today!</p>
        <button style={styles.button}>Get started</button>
      </div>
    </div>
  );
};

const DetailBox = () => {
  return (
    <div style={styles.Detailbox}>
      <Heading />
      <HeroImg />
      <CallAction />
    </div>
  );
};

const styles = {
  Detailbox: {
    height: "800px",
    overflowX: 'hidden',
  },
  header: {
    margin: '20px',
    padding: '0 20px',
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
  },
  headingText: {
    fontWeight: 'bolder', // Similar to 'fw-bolder'
    fontSize: '2rem', // Default font size for mobile
    wordWrap: 'break-word', // Prevents long text overflow
    margin: '20px auto', // Adds margin above and below the text
    textAlign: 'center', // Center the text on all screens
    maxWidth: '100%', // Ensures the text doesn't exceed the width of the container
    '@media (min-width: 576px)': {
      fontSize: '2.5rem', // Tablet font size
    },
    '@media (min-width: 992px)': {
      fontSize: '3rem', // Desktop font size
      textAlign: 'left', // Align left for desktop
    },
  },
  heroContainer: {
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
  },
  cardContainerDesktop: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-100px",
    marginLeft: "300px", // Keeps the card in its original desktop position
  },
  cardContainerTablet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto", // Centers the card for tablet screens
  },
  cardContainerMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto", // Centers the card for mobile screens
    position: "static", // Removes absolute positioning for smaller screens
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    maxWidth: '600px',
    width: '90%', // Ensures it fits within the screen
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#e00053',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
};

export default DetailBox;
