// const showsArray=[
//     { 
//         date: 'Mon Sept 06 2021',
//         venue: 'Ronald Lane',
//         location: 'San Francisco, CA',
//     },
//     {   
//         date: 'Tue Sept 21 2021',
//         venue: 'Pier 3 Easter',
//         location: 'San Francisco, CA',
//     },
//     {
//         date: 'Fri Oct 15 2021',
//         venue: 'View Lounge',
//         location: 'San Francisco, CA',
//     },
//     {
//         date: 'Sat Nov 06 2021',
//         venue: 'Hyatt Agency',
//         location: 'San Francisco, CA',
//     },
//     {
//         date: 'Fri Nov 26 2021',
//         venue: 'Moscow Center',
//         location: 'San Francisco, CA',
//     },
//     {
//         date: 'Wed Dec 15 2021',
//         venue: 'Press Club',
//         location: 'San Francisco, CA',
//     }];
    
const showsList = document.querySelector('.shows-container__block');
const key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

function appendShows(showsArray){
    for (let i = 0; i < showsArray.length; i++){
        
    const listItem = document.createElement('div');
    listItem.classList.add("shows-container__block__item");

    const headerDate = document.createElement('h3');
    headerDate.innerHTML="DATE";
    headerDate.classList.add('shows-container__block__item__header--hidden');
    const dateElement = document.createElement('h3');

    dateElement.innerText = showsArray[i].date;
    dateElement.classList.add("shows-container__block__item__text--highlighted");
  
    const headerVenue = document.createElement('h3');
    headerVenue.innerHTML = "VENUE";
    headerVenue.classList.add("shows-container__block__item__header--hidden");

    const venueElement = document.createElement('p');
    venueElement.innerText = showsArray[i].place;
    venueElement.classList.add("shows-container__block__item__text");


    const headerLocation = document.createElement('h3');
    headerLocation.innerHTML = "LOCATION";
    headerLocation.classList.add('shows-container__block__item__header--hidden');

    const locationElement = document.createElement('p');
    locationElement.innerText = showsArray [i].location;
    locationElement.classList.add("shows-container__block__item__text--last-column");

    const btnElement = document.createElement('a');
    btnElement.innerHTML="BUY TICKETS";
    btnElement.classList.add("shows-container__block__item__btn");

    const hrElement = document.createElement('hr');
    hrElement.classList.add("shows-container__block__item__hr");

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
}

    function loadShows(){
        axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${key}`).then((response)=>{
            console.log(response.data);

            appendShows(response.data);
        })
    }
        loadShows();
