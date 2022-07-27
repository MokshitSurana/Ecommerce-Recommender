import React,{useEffect, useState} from 'react'
import Search from '../search/Search'
import Hero from './Hero'
import Recommended from './Recommended'
import TopOffers from './TopOffers'
import Trending from './Trending'
import { useHistory } from 'react-router-dom'
const url = process.env.REACT_APP_RECOMMEND_URL;
const Home = () => {
  const history = useHistory()
  useEffect(()=>{
    window. scrollTo(0, 0);
  })
  const [recom, setRecom] = useState()

  useEffect(()=>{
    fetch(url+"?productId="+"27044")
    .then(response=>response.json())
    .then((res)=>{
      setRecom(res);
      console.log(res);
    })
    window. scrollTo(0, 0);
  },[])

  const id = localStorage.getItem('id') || '4702'
  return (
    <>
        <Search onSearchListener={ (input) => {
          localStorage.setItem('input',input)
          history.push('/search')
        }}/>
        <Hero/>
        <TopOffers/><hr />
        <Recommended id={"27044"} /><hr />
        <Trending/><hr />
    </>
  )
}

export default Home