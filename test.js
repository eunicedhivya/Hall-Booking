let rooms = [
    {
        "room_id": 1,
        "room_name": "Room 1",
        "amenities": [
            "AC",
            "CCTV",
            "STAGE"
        ],
        "noSeats": 100,
        "room_fee_perhour": 1500,
        "bookings": [
            {
                "room_id": 1,
                "customer_name": "Dhivya",
                "date": "13 Jan 2020",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            },
            {
                "room_id": 1,
                "customer_name": "Tripathi",
                "date": "14 Jan 2020",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            }
        ]
    },
    {
        "room_id": 2,
        "room_name": "Room 2",
        "amenities": [
            "AC",
            "CCTV",
            "STAGE"
        ],
        "noSeats": 100,
        "room_fee_perhour": 1500,
        "bookings": [
            {
                "room_id": 2,
                "customer_name": "Tripathi",
                "date": "14 Jan 2020",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            }
        ]
    }
]


// const getRoom = rooms.find( x => x.room_id === 1);
  // Check if booking already exists for chosen room in the selected timeframe

// console.log(getRoom.bookings.map((obj)=>obj.date));

// Check hall availability

// date, startTime, endTime against an array of obj
function checkAvailability(roomid, date, strt, end){
    // Get Room Bookings
    const getRoomBooking = rooms.find( x => x.room_id === 1).bookings;
    console.log("getRoomBooking", getRoomBooking);
    let fdBookings = getRoomBooking.filter((obj)=>{
        return obj.date == date;
    })

    if(fdBookings.length > 0){
        return false;
    }else{
        return true;
    }

    console.log(fdBookings);  

}

checkAvailability(2,"14 Jan 2020","10:00am", "15:00pm");

