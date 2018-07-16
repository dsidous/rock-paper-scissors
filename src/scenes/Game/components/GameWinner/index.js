import React from 'react';
import Button from '../../../../components/Button';

import './styles.css';

const GameWinner = ({ gameWinner, player1Label, player2Label, reset }) => ((
  <div className="Result">
    <div className="winner">
				<span>
          {`${(gameWinner === 1 ? player1Label : player2Label)} WINS THE GAME`}
        </span>
		</div>
    <div className="play">
      <Button onClick={reset}>
        NEW GAME
      </Button>
    </div>
  </div>
  )
)

export default GameWinner;
