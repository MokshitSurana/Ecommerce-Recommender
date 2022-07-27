import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <><div class="container d-flex justify-content-center">
          <ul class="wrapper">
              <li class="icon facebook">
                  <span class="tooltip">Facebook</span>
                  <span><i class="fab fa-facebook-f"></i></span>
              </li>
              <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span><i class="fab fa-twitter"></i></span>
              </li>
              <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span><i class="fab fa-instagram"></i></span>
              </li>
              <li class="icon github">
                  <span class="tooltip">Github</span>
                  <span><i class="fab fa-github"></i></span>
              </li>
              <li class="icon youtube">
                  <span class="tooltip">Youtube</span>
                  <span><i class="fab fa-youtube"></i></span>
              </li>
          </ul>
      </div>
      <div class="boujee-text d-flex justify-content-center">The Bug Stops Here</div>
      </>
  )
}

export default Footer