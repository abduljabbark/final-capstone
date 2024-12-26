import React from 'react'

const CallAction = () => {
  return (
    <div style={styles.cardContainer}>
            <div style={styles.card}>
                <h2>List your restaurant or shop on foodpanda</h2>
                <p>
                    Would you like millions of new customers to enjoy your
                    amazing food and groceries? So would we!
                </p>
                <p>
                    It's simple: we list your menu and product lists online,
                    help you process orders, pick them up, and deliver them to
                    hungry pandas – in a heartbeat!
                </p>
                <p>Interested? Let's start our partnership today!</p>
                <button style={styles.button}>Get started</button>
            </div>
        </div>
  )
}
const styles = {
    cardContainer: {
        position:"absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-150px',
        marginLeft: '300px'
    },
    card: {
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        maxWidth: '600px',
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
export default CallAction