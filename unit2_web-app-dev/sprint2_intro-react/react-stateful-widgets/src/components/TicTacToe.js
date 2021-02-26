import React, {useState} from 'react'; 

export const emptyGameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

/*
Player is X, computer is O. 
Player is represneted by 1 in the array, computer is represnted by -1, 0s are free 
*/

export default function TicTacToe(){
	const [board, setBoard] = useState(emptyGameBoard);

	function displayXO(index1, index2){
		if(board[index1][index2] === 0){
			return '';
		} else if(board[index1][index2] === 1){
			return 'X';
		} else if(board[index1][index2] === -1){
			return 'O';
		}
	}

	return (
	<div className='container tictactoe'>
		<h2>Tic Tac Toe</h2>
			<div className='game-board'>
				<div className='row row-top'> 
					<div className='box box-left'>{displayXO(0,0)}</div>
					<div className='box box-center'>{displayXO(0,1)}</div>
					<div className='box box-right'>{displayXO(0,2)}</div>
				</div> 
				<div className='row row-center'> 
					<div className='box box-left'>{displayXO(1,0)}</div>
					<div className='box box-center'>{displayXO(1,1)}</div>
					<div className='box box-right'>{displayXO(1,2)}</div>
				</div> 
				<div className='row row-bottom'> 
					<div className='box box-left'>{displayXO(2,0)}</div>
					<div className='box box-center'>{displayXO(2,1)}</div>
					<div className='box box-right'>{displayXO(2,2)}</div>
				</div> 
			</div>
	</div>
	);
}