import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import currentUser from '../services/UserName';

export const StartPage = () => {
	const [userName, setUserName]= useState('');
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName) {
			currentUser.setToStorage(userName)
		}
		setUserName('')
		navigate('/mainpage')
	}
	return (
		<div className='start_page'>
			<form>
				<label htmlFor='userName'>Name</label>
				<input 
					id='userName'
					type='text'
					name='userName'
					value={userName}
					placeholder='Enter your name..'
					onChange={e => setUserName(e.target.value)}
				/>
				<button 
					className='next_button' 
					type='submit' 
					onClick={handleSubmit}>Next
				</button>
			</form>
		</div>
	)
}