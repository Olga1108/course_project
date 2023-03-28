import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const StartGame = () => {
	const [userName, setUserName] = useState('')
	const navigate = useNavigate()

	const onSubmitName = (event) => {
		event.preventDefault();

		if(userName.trim().length === 0) {
			alert("Enter a name !!");
			setUserName("");
			return;
		}
		localStorage.setItem("userName", userName);
		

		setUserName("");
		navigate('/mainGame')
	};
	return (
		<div className="start_game">
			<div onSubmit={onSubmitName}>
				<input
					type="text"
					className="name_input"
					placeholder="Enter name"
					value={userName}
					onChange={(event) => {
						event.preventDefault();
						setUserName(event.target.value)
					}}
				></input>

				<button type='submit' className="next_button" onClick={onSubmitName}>
					Next
				</button>
			</div>
		</div>
	)
}