import React from 'react'

const SubmitEvent = () => {
  return (
    <div>SubmitEvent</div>
  )
}

export default SubmitEvent

const submit_registration = ()=>{
    const email = localStorage.getItem("b_email");
    const password = localStorage.getItem("b_password");
    const name = localStorage.getItem("b_name")
    const username = localStorage.getItem("b_username")


    const userData = {
        email: email,
        password: password,
        name : name,
        username : username
    }
    const url = "backend_url" + "/login";
    fetch(url, {})
    .then((response)=>response.json())
    .then((data)=>{
        //users data Received!!!!
    })
}

export {submit_registration};
