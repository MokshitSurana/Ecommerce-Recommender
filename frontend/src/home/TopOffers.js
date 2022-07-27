import React,{useEffect} from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './topData.json'
const TopOffers = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	})
	return (
		<div className='topoffer-container' id='top-offers'>
			<div className="header-wrapper">
				<h1>Top Offers</h1>
			</div>
			<div className="card-wrapper">
				{
					data.map((pack, id) => {
						return (
							<Cards pack={pack} key={id} />
						)
					})
				}
			</div>
		</div>
	)
}

export default TopOffers