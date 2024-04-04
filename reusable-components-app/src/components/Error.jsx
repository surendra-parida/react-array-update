import React from 'react'

const Error = () => {
    const errorMessage = "An error occurred. Please try again later.";

    const styles = {
        container: {
          padding: '10px',
          backgroundColor: '#FFCDD2',
          border: '1px solid #E57373',
          borderRadius: '5px',
          maxWidth: '300px',
          margin: '340px auto',
          textAlign: 'center',
        },
        errorMessage: {
          color: '#D32F2F',
          fontWeight: 'bold',
        },
      };

    return (
      <div style={styles.container}>
        <p style={styles.errorMessage}>{errorMessage}</p>
      </div>
    )
}
export default Error




