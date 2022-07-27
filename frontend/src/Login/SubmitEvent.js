import React from 'react'

const SubmitEvent = () => {
  return (
    <div>SubmitEvent</div>
  )
}

export default SubmitEvent

const submit_login = ()=>{
    const email = localStorage.getItem("b_email");
    const password = localStorage.getItem("b_password");
    const endpoint = localStorage.getItem("endpoint");
    const userData = {
        email: email,
        password: password
    }
    const url = "backend_url" + endpoint;
    fetch(url, {
        method: "POST",
        body: userData,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((response)=>response.json())
    .then((data)=>{
        //users data fetched!!!!
    })
}

export {submit_login};