import React from 'react'

// cursor-not-allowed

const styles = {
    button: {
        marginTop:'150px',
        width: '330px',
        height: '81px',
        background: 'rgba(94, 217, 199, 0.74)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        color: 'white',
        fontFamily: 'Istok Web',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '72px'
    }
};

export default function StartButton(props) {

  const { setStartGame } = props;

  return (
    <button style={styles.button} onClick={()=>setStartGame('hidden')}>
        Start Game
    </button>
  )
}
