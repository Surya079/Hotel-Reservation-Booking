import { rooms } from "/rooms/rooms.js";
import { cart, addToCart } from "./cart.js";

let roomHTML = '';
rooms.forEach((rooms) => {
  roomHTML +=
    `<div class="room__card" data-room-id="${rooms.id}">
    <img src="${rooms.image}" alt="room" />
    <div class="room__card__details">
      <div>
        <h4>${rooms.room_type}</h4>
        <p>${rooms.specilities}</p>
      </div>
      <h3>$${rooms.price}<span>/${rooms.time}</span></h3>
    </div>
  </div>`

});
document.querySelector('.room__grid').innerHTML = roomHTML;

document.querySelectorAll('.room__grid').forEach((button) => {
  button.addEventListener('click', () => {
    const roomsId = button.dataset;
    console.log(roomsId);
    addToCart(roomsId);

    addCartquantity();

  });
});
function addCartquantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.rooms;
  });
  document.querySelector('.Quantity').innerHTML = cartQuantity;

};
addCartquantity();


// const date1 = document.querySelector('.date1').value;
// const date2 = document.querySelector('.date2').value;
// const guest = document.querySelector('.guest').value;
document.getElementById('abcd').addEventListener(('submit'), () => {
  var date1 = Number(getElementVal("adate"));
  var date2 = Number(getElementVal("ddate"));
  var guest = Number(getElementVal("guest"));

  if (date1  > date2 && guest >0){
    alert("Few Rooms Only availabe...")
  }
  else{
    alert("Soory! Rooms Not Available...")
  }
})
const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document.querySelector('.booking1').addEventListener(('click'),()=>{
  alert("You want to Should Book the Rooms...")
})
document.querySelector('.book-btn').addEventListener(('click'),()=>{
  alert("Go to menu and Request for booking Rooms...")
})
document.querySelector('.book-btn-2').addEventListener(('click'),()=>{
  alert("Go to menu and Request for booking Rooms...")
})
document.querySelector('.book-btn-3').addEventListener(('click'),()=>{
  alert("Go to menu and Request for booking Rooms...")
})

document.querySelector('.button').addEventListener(('click'),()=>{
        document.querySelector('.search-input').classList.add('added')
})