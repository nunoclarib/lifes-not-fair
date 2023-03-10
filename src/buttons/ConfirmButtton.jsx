import React from "react";

// cursor-not-allowed

const styles = {
  position: {
    position: "absolute",
    bottom: "2rem",
    zIndex: "100",
    left: "44%",
  },
};

export default function ConfirmButtton({ buttonUnselected, handleConfirm }) {
  return (
    <>
      {buttonUnselected ? (
        <button
          className="text-white font-bold py-2 px-4 rounded-xl h-14 bg-teal-400 cursor-not-allowed opacity-50"
          style={styles.position}
        >
          Confirm Your Wokeness 😌
        </button>
      ) : (
        <button
          className="text-white font-bold py-2 px-4 rounded-xl h-14 bg-teal-400"
          style={styles.position}
          onClick={handleConfirm}
        >
          Confirm Your Wokeness 😌
        </button>
      )}
    </>
  );
}
