import React, { useEffect, useState } from 'react'
import Cards from '../card/Cards'
import './recommendations.css'
import Search from '../search/Search'
import Recommended from '../home/Recommended'
import { useLocation } from "react-router-dom"
// import StarRating from 'react-svg-star-rating'
const Recommendations = () => {
  const location = useLocation();
  // console.log(location.state.img);
  const data = location.state.data
  const url = process.env.REACT_APP_RECOMMEND_URL;
  const [recom, setRecom] = useState()

  // useEffect(()=>{
  //   fetch(url+"?productId="+data.productId || data.id)
  //   .then(response=>response.json())
  //   .then((res)=>{
  //     setRecom(res);
  //     console.log(res);
  //   })
  //   window. scrollTo(0, 0);
  // },[])
  return (
    <div class="s">
      <Search />
      <div class="product_view">
        <div class="product_img">
          {/* <img class="img1" src="http://assets.myntassets.com/v1/images/style/properties/072af0cd079f20296c72f3594a21f141_images.jpg" /> */}
          <img class="img1" src={data.image || data.link} />

        </div>
        <div className="product_detail">
          <span class="product-catagory">{data.gender + ", " + data.articleType}</span>
          <h1>{data.productDisplayName}</h1>
          <div className="desc">
            <small>{data.masterCategory}, {data.subCategory}</small><br />
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga facere, facilis voluptatem, consequuntur quibusdam aperiam harum sint dolorum deleniti nisi assumenda, molestias amet sit iure vero. Accusamus itaque, quo sequi recusandae sint minus sapiente assumenda.</small><br />

            <p><b>Color: </b>{data.baseColour}</p>
            <p><b>Seller: </b>{data.seller}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span><br />

            <div class="product-bottom-details">
              <div class="product-price"><small>$96.00</small>$230.99</div>
              <div class="product-links">
                <a href=""><i class="fa fa-heart"></i></a>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>


            <div class="services">
              <div class="box-container">

                <div class="box">
                  <i class="fas fa-shipping-fast"></i>
                  <h3>fast delivery</h3>
                  <p>ECOMS directly manages delivery for this product. Order delivery tracking to your doorstep is available.</p>
                </div>


                <div class="box">
                  <i class="fas fa-undo"></i>
                  <h3>10 days replacement</h3>
                  <p>Keep the item in its original condition and packaging along with MRP tag and accessories for a successful pickup.</p>
                </div>

                <div class="box">
                  <i class="fas fa-headset"></i>
                  <h3>24 x 7 support</h3>
                  <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Recommended id={data.productId || data.id}/>
    </div>
  )
}

export default Recommendations