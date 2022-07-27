import Reac, {useEffect} from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './trending.json'
const Trending = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	})
	return (
		<div className='topoffer-container' id='trending'>
			<div className="header-wrapper">
				<h1>Trending</h1>
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

export default Trending