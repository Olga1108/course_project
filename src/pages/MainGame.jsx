import React, {useState, useEffect} from 'react';
import { gameData } from '../scenario';
import './game.css'

const RenderPage = ({objPage, setPageId}) => {
	return (
		<div className='main_page' style={{backgroundImage: `url(${objPage.image})`}}>
			{
				objPage?.textContent?.map((elem, index) => {
					return <p className='main_text' key={index + 'b'}>{elem}</p>
				})
			}
			{
				objPage?.nextPageId ? (
				<button 
					id={objPage?.nextPageId} 
					onClick={(e) => {
						setPageId(e.currentTarget.id)
						return (<MainGame id={e.currentTarget.id} />)
					}}>Next
				</button>) 
				: 
				objPage?.answers?.length > 0 ? (
				<div className='button_wrapper'>
					{objPage?.answers?.map((el, index) => {
						return (
							<button 
								id={el.nextPageId}
								key={index + 'c'} 
								className='answer_button' 
								onClick={(e) => {
									console.log('e id', e.currentTarget.id)
									setPageId(e.currentTarget.id)
									return (<MainGame id={e.currentTarget.id} />)
							}}
							>
								{el.text}
							</button>
						)})}
					</div>)
					: 'coin'
			}
		</div>
	)
}

export const MainGame = ({ id }) => {
	const [pageId, setPageId] = useState(id)
	let newPageItem = gameData.find(elem => elem.id === id)
	const [pageItem, setPageItem] = useState(newPageItem)
	
	useEffect(() => {
		setPageItem(gameData.find(elem => elem.id === pageId))
	}, [pageId])
	return (
		<RenderPage objPage={pageItem} setPageId={setPageId}/>
	)
}