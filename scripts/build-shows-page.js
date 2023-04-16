const showsArray=[
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA',
    }];
    const showsArray2=[
    {   
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 Easter',
        location: 'San Francisco, CA',
    }];
    const showsArray3=[
        {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA',
    }];
    const showsArray4=[
        {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
    }];
    const showsArray5=[
        {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA',
    }];
    const showsArray6=[
        {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
    }];

const showsList = document.querySelector('.shows-container__block');

for(let i = 0; i < showsArray.length; i++){
    const listItem = document.createElement('li');
    
    // function buttonHandler (event) {
     
    //     console.log('Clicked');
    // }

    // const list = document.querySelector('li');

    // list.onfocus = buttonHandler;
    // list.addEventListener('click', buttonHandler);
    
    
    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray[i].date;
    dateElement.classList.add("shows-container__block__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray[i].venue;
    venueElement.classList.add("shows-container__block__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray [i].location;
    locationElement.classList.add("shows-container__block__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__hr");

     listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}

const showsList2 = document.querySelector('.shows-container__block__second');
for(let i = 0; i < showsArray2.length; i++){
    const listItem = document.createElement('li');

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray2[i].date;
    dateElement.classList.add("shows-container__block__second__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray2[i].venue;
    venueElement.classList.add("shows-container__block__second__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray2 [i].location;
    locationElement.classList.add("shows-container__block__second__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__second__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__second__hr");

     listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}
const showsList3 = document.querySelector('.shows-container__block__third');
for(let i = 0; i < showsArray2.length; i++){
    const listItem = document.createElement('li');

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray3[i].date;
    dateElement.classList.add("shows-container__block__third__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray3[i].venue;
    venueElement.classList.add("shows-container__block__third__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray3 [i].location;
    locationElement.classList.add("shows-container__block__third__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__third__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__third__hr");

     listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}
const showsList4 = document.querySelector('.shows-container__block__fourth');
for(let i = 0; i < showsArray2.length; i++){
    const listItem = document.createElement('li');

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray4[i].date;
    dateElement.classList.add("shows-container__block__fourth__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray4[i].venue;
    venueElement.classList.add("shows-container__block__fourth__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray4 [i].location;
    locationElement.classList.add("shows-container__block__fourth__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__fourth__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__fourth__hr");

     listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}
const showsList5 = document.querySelector('.shows-container__block__fifth');
for(let i = 0; i < showsArray2.length; i++){
    const listItem = document.createElement('li');

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray5[i].date;
    dateElement.classList.add("shows-container__block__fifth__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray5[i].venue;
    venueElement.classList.add("shows-container__block__fifth__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray5 [i].location;
    locationElement.classList.add("shows-container__block__fifth__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__fifth__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__fifth__hr");

     listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}
const showsList6 = document.querySelector('.shows-container__block__sixth');
for(let i = 0; i < showsArray2.length; i++){
    const listItem = document.createElement('li');

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray6[i].date;
    dateElement.classList.add("shows-container__block__sixth__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray6[i].venue;
    venueElement.classList.add("shows-container__block__sixth__text" );

    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray6 [i].location;
    locationElement.classList.add("shows-container__block__sixth__text__end");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__sixth__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__sixth__hr");

    

    listItem.appendChild(headerDate);
    listItem.appendChild(dateElement);
    listItem.appendChild(headerVenue);
    listItem.appendChild(venueElement);
    listItem.appendChild(headerLocation);
    listItem.appendChild(locationElement);
    listItem.appendChild(btnElement);
    listItem.appendChild(hrElement);
    showsList.appendChild(listItem);
}
