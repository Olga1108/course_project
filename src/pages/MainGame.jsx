import React, {useState, useEffect} from 'react';
import { gameData } from '../scenario';
import { useNavigate } from 'react-router-dom';
import currentUser from '../services/UserName';
import './game.css';

const RenderPage = ({objPage, setPageId}) => {
	const currentName = currentUser.getFromStorage();
	const navigate = useNavigate()
	return (
		<div className='main_page' style={{backgroundImage: `url(${objPage.image})`}}>
			<span className='main_text'>{currentName},</span>
			{
				objPage?.textContent?.map((elem, index) => {
					return <p className='main_text' key={index + 'b'}>{elem}</p>
				})
			}
			{
				objPage?.nextPageId ? (
				<button 
					id={objPage?.nextPageId} 
					className='next_button'
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
									if (el?.nextPageId === '1' ) {
										currentUser.deleteFromStorage();
										navigate('/')
									} else {
										setPageId(e.currentTarget.id)
										return (<MainGame id={e.currentTarget.id} setPageId={setPageId} />)
									}
								}}
							>
								{el.text}
							</button>
						)})}
					</div>)
					: "coin"
			}
		</div>
	)
}

export function MainGame({ id }) {
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