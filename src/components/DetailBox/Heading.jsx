import React from 'react';

const Heading = () => {
    return (
        <header style={styles.header}>
            <h1
                sx={{
                    fontWeight: 700,
                    color: "#333",
                    marginBottom: "20px",
                    fontSize: { xs: "24px", sm: "28px", md: "36px" }, // Responsive font size
                    textAlign: { xs: "center", sm: "center", md: "left" }, // Center on smaller screens, left on desktop
                    marginLeft: { md: '20px', xs: '0' }, // Shift left only on desktop screens
                }} 
                className='fw-bolder'>
                You prepare the food, we handle the rest
            </h1>
        </header>
    );
};

const styles = {
    header: {
        margin: '20px', // Adjust margin for better responsiveness
        padding: '0 20px', // Padding for smaller screens
        maxWidth: '1200px', // Prevents header from stretching too wide on large screens
        width: '100%', // Ensures the header stays responsive
    },
};

export default Heading;
