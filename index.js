import express from "express";

const app = express();

app.use(express.json())

// Port for localhost
const PORT = 4000;

// let rooms = [
//     {
//         "room_id": 1,
//         "room_name": "Room 1",
//         "amenities": [
//             "AC",
//             "CCTV",
//             "STAGE"
//         ],
//         "noSeats": 100,
//         "room_fee_perhour": 1500,
//         "bookings": [
//             {
//                 "room_id": 1,
//                 "customer_name": "Dhivya",
//                 "date": "13 Jan 2020",
//                 "startTime": "10:00am",
//                 "endTime": "15:00pm"
//             },
//             {
//                 "room_id": 1,
//                 "customer_name": "Tripathi",
//                 "date": "14 Jan 2020",
//                 "startTime": "10:00am",
//                 "endTime": "15:00pm"
//             }
//         ]
//     },
//     {
//         "room_id": 2,
//         "room_name": "Room 2",
//         "amenities": [
//             "AC",
//             "CCTV",
//             "STAGE"
//         ],
//         "noSeats": 100,
//         "room_fee_perhour": 1500,
//         "bookings": [
//             {
//                 "room_id": 2,
//                 "customer_name": "Tripathi",
//                 "date": "14 Jan 2020",
//                 "startTime": "10:00am",
//                 "endTime": "15:00pm"
//             }
//         ]
//     }
//   ]
let halls = [
  
];
let bookings = [
  
];

app.get('/', function (request, response) {
  // response.send('Hall Booking API')
  let html = "";
  html += "<h1>Hall Booking API</h1>"
  html += "<a href=\"/halls\">Show all rooms</a> | "
  html += "<a href=\"/bookings\">Show all bookings</a> | "
  html += "<a href=\"/bookhall\">Book a hall</a> | "
  html += "<a href=\"/addroom\">Add a room</a>"
  response.set('Content-Type', 'text/html');
  response.send(html)
})

app.get('/halls', function (request, response) {
  response.send(halls)
})


// Add Room //
// =========================== //
app.post('/addhall', function (request, response) {
  const addRoom = request.body;
  // addRoom.bookings = [];
  halls.push(addRoom);
  response.send(addRoom)
})

app.get('/bookings', function (request, response) {
  response.send(bookings)
})



function checkAvailability(roomid, date, strt, end){
    // Get Room Bookings
    // const getRoomBooking = halls.find( x => x.room_id === 1);
    // console.log("getRoomBooking", getRoomBooking);
    let fdBookings = bookings.filter((obj)=>{
        return obj.room_id == roomid && obj.date == date;
    })

    console.log(fdBookings);

    if(fdBookings.length > 0){
        return false;
    }else{
        return true;
    }

    // console.log(fdBookings);  

}





// Add Booking //
// =========================== //
app.post('/bookhall', function (request, response) {
  const addRoom = request.body;

  console.log(addRoom.room_id);
  console.log(addRoom.date);
  console.log(addRoom.startTime);
  console.log(addRoom.endTime);

  // checkAvailability(addRoom.room_id,addRoom.date,addRoom.startTime,addRoom.startTime)
  console.log(checkAvailability(addRoom.room_id,addRoom.date,addRoom.startTime,addRoom.startTime));

  // const getRoom = halls.find( x => x.room_id === addRoom.room_id);

  if(checkAvailability(addRoom.room_id,addRoom.date,addRoom.startTime,addRoom.startTime) === false){
    response.status(404).send('Room Not Available on this date')
  }else{
    bookings.push(addRoom)
    response.status(200).send('Room is Available on this date')
  }
  // Check if booking already exists for chosen room in the selected timeframe
  // response.send(addRoom)
})

app.listen(PORT, () => console.log("Server is started in "+PORT))