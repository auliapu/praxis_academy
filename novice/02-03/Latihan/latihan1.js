var books = [
    {name:'JavaScript', pages:450},
    {name:'Angular', pages:902},
    {name:'Node', pages:432}
];

for(var i = 0; i < books.length; i++) {
    books[i].lastRead = new Date();
}

books.map((book)=> {
    book.lastReadBy = 'me';
    return book;
});

console.log(books);

//contoh Array Functions
let meetups = [
    {name: 'JS', isActive:true, members:450},
    {name:'Angular', isActive:true, members:900},
    {name:'Angular', isActive:true, members:900},
];

let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
    let m = meetups[i];
    if (m.isActive) {
        activeMeetups.push(m);
    }
}
console.log(activeMeetups);

let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m)=>{
    return m.isActive;
}));
console.log(activeMeetupsFP);

//contoh Function Chaining
let meetups = [
    {name:'JavaScipt', isActive:true, members:700},
    {name:'Angular', isActive:true, members:900},
    {name:'Node', isActive:false, members:600},
    {name:'React', isActive:true, members:500}
];
let sumFPChain = meetups.filter((m)=>{
    return m.isActive;
})
.map((m)=>{
    return m.members- (0.1*m.members);
})
.reduce((acc, m)=>{
    return acc + m;
},0);
console.log(sumFPChain);

//contoh side effects
let meetup = {name:'JS',isActive:true,members:49};

const scheduleMeetup = (date, place) => {
    meetup.date = date;
    meetup.place = place;  
    
    if (meetup.members < 50)
      meetup.isActive = false;
  }
  
  const publishMeetup = () => {
    if (meetup.isActive) {
      meetup.publish = true;
    }
  }
  
  scheduleMeetup('today','Bnagalore');
  publishMeetup();
  console.log(meetup);