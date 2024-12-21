import React from 'react'

const Heading = () => {
    return (
        <header style={styles.header}>
            <h1 className='fw-bolder'>You prepare the food, we handle the rest</h1>
        </header>
    );
}
const styles = {
    header: {
        
        margin: '20px 0px 20px 300px',
    },
};
export default Heading