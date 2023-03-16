import React from 'react'

export default function Footer() {
       const dateElement = document.getElementById("date");
const currentDate = new Date();
const year = currentDate.getFullYear();
dateElement.innerHTML = `Today is ${currentDate.toDateString()}`;
  return (
       <footer>
       <div class="container">
         <p>&copy; create by Momtaz</p>
         <p id="date"></p>
       </div>
     </footer>
     
  )
}
