import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainGame } from '../pages/MainGame';


const AppRouter = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainGame id={'1'}/>} />
				<Route path='*' element={<MainGame />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;