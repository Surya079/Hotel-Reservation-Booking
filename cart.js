
export let cart = JSON.parse(localStorage.getItem('cart'));
 if (!cart){
    cart = [{
        id:'13hf0230rber0923rp320993-3ro8y',
        rooms:0
    },{
        id:'bsdf9813h9y824-2rbj20834',
        rooms:0
    }];
 }
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
};

export function addToCart(roomsId){
    let matchingroom;
        cart.forEach((cartItem)=>{
          if (roomsId === cartItem.roomsId){
            matchingroom = cartItem;
          }
        });
        if(matchingroom){
          matchingroom.rooms += 1;
        }else{
            cart.push({
              roomsId : roomsId,
              rooms : 1
            });
        }
        
  };

export function updateQuantity(roomsId,newRooms){
      let matchingroom;
      cart.forEach((cartItem)=>{
        if (roomsId === cartItem.roomsId){
          matchingroom = cartItem;
        }
      });
      matchingroom.rooms = newRooms;
      saveToStorage();
};
  
