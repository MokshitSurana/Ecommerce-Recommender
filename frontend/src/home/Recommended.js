import React, { useState, useEffect } from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
const Recommended = ({ id }) => {
	const [pack, setPack] = useState([]);
	const url = process.env.REACT_APP_RECOMMEND_URL;

	useEffect(() => {
		console.log(url);
		fetch(url + "?productId=" + id)
			.then(res => res.json())
			.then(data => {
				setPack(data);
			})
		// setPack(data)
		window.scrollTo(0, 0);
	}, [])

	return (
		<div className='topoffer-container' id='recommended'>
			<div className="header-wrapper">
				<h1>Recommended for <span style={{ "color": "#007bff" }}>YOU</span></h1>
			</div>
			<div className="card-wrapper">
				{
					pack.map((p, id) => {
							return (
								<Cards pack={p} key={id} />
							)
						})
				}
			</div>
		</div>
	)
}

export default Recommended