export function getRooms(roomsId){
    let matchingRooms;
    // rooms.forEach((rooms)=>{
    //     if(rooms.id===roomsId){
    //         matchingRooms = rooms;
  
    //     }
    // });
    for(let i=0;i<rooms.length;i++){
        if(rooms[i].id==roomsId){
            matchingRooms = rooms[i];
            break;
        }
    }
    // Rooms2.forEach((rooms)=>{
    //   if (rooms.id === roomsId){
    //     matchingRooms = roomsId
    //   }
    // })
    return matchingRooms;
  };
// console.log(matchingRooms);



export const rooms = [{
    id:'13hf0230rber0923rp320993-3ro8y',
    image:"https://i.postimg.cc/d02yqsbB/room-1.jpg",
    room_type:'Deluxe Suite',
    specilities:'Well-appointed rooms designed for guests who desire a more.',
    price: 399,
    time : 'night'
},{
    id:'bsdf9813h9y824-2rbj20834',
    image:"https://i.postimg.cc/yYG9jrhF/room-2.jpg",
    room_type:'Deluxe Suite',
    specilities:'Well-appointed rooms designed for guests who desire a more.',
    price: 599,
    time : 'night'
},{
    id:'ef0923-fn332o09u024tbl8842-tb2j4024',
    image:"https://i.postimg.cc/wv9s3KHd/room-3.jpg",
    room_type:'Deluxe Suite',
    specilities:'Well-appointed rooms designed for guests who desire a more.',
    price: 799,
    time : 'night'
}]

