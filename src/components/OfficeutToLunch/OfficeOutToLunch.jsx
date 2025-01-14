// import React from 'react'
// import Heading from '../DetailBox/Heading'
// import BackgroundImage from './BackgroundImage'
// import DetailAction from './DetailAction'

// const OfficeOutToLunch = () => {
//   return (
//     <div  style={styles.Detailbox}>
//     <Heading/>
//     <BackgroundImage/>
//     <DetailAction/>
// </div>
//   )
// }
// const styles = {
//     Detailbox: {
//       height:"650px"
       
//     },
// }
// export default OfficeOutToLunch
import React from 'react';
import BGIMG from "../../images/home-corporate-pk.webp";

const OfficeOutToLunch = () => {
    return (
        <div style={styles.Detailbox}>
            <header style={styles.header}>
                <h1 style={styles.headerText}>Take your office out to lunch</h1>
            </header>
            <div style={styles.heroContainer}>
                <img
                    src={BGIMG}
                    alt="Chef cooking"
                    style={styles.heroImage}
                />
            </div>
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
                    <h2>foodpanda for business</h2>
                    <p>
                        Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
                    </p>
                    <button style={styles.button}>Get started</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    Detailbox: {
        height: "650px",
        overflowX: "hidden", // Prevents horizontal scrolling
    },
    header: {
        margin: "20px auto",
        textAlign: "center",
    },
    headerText: {
        fontWeight: "bolder",
        fontSize: "2rem",
        wordWrap: "break-word", // Prevents long text overflow
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
        marginLeft: "270px", // Keeps the card in its original desktop position
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
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        maxWidth: "600px",
        width: "90%", // Ensures it fits within the screen
        textAlign: "left",
    },
    button: {
        backgroundColor: "#e00053",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "15px",
        cursor: "pointer",
    },
};

export default OfficeOutToLunch;
