import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './cards.css'
const Cards = (props) => {
    const data = props.pack;
    const history = useHistory()
    return (
        <div class="product-card">
            <Link to={{
                pathname: "/recommendations",
                state: { data: data }

            }}
            onClick={()=>{ window.scrollTo(0, 0);
            }}>
                <div class="badge">Hot</div>
                <div class="product-tumb">
                    <img src={data.link || data.image} alt="" />
                </div>
                <div class="product-details">
                    <span class="product-catagory">{data.gender + ", " + data.articleType}</span>
                    <h4>{data.productDisplayName}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                    <div class="product-bottom-details">
                        <div class="product-price"><small>$96.00</small>$230.99</div>
                        <div class="product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Cards