import React from 'react'

const styles = {
    position: {
        position: "absolute",
        top: "1rem",
        zIndex: "100",
        left: "15px",
    }
};

export default function CounterButton() {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded bg-teal-400 opacity-100" style={styles.position}>
          <div>Wokeness Counter ⏰</div>
          <div className='text-black'>0/16</div>
    </button>
  )
}
