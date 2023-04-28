const messageForm = document.getElementById("messageForm");
const messageList = document.querySelector(".message-container__top__list");
const key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

//Function to load posted messages

function appendMessages(messagesArray){
    for (let i = 0; i < messagesArray.length; i++){
        const li = document.createElement('li');

    const postedName = document.createElement('h3');
    postedName.innerText = messagesArray[i].name;
    postedName.classList.add(".message-container__top__list__username");

    const postedDate = document.createElement('p');
    postedDate.innerText = messagesArray[i].timestamp;
    postedDate.classList.add(".message-container__top__list__date");

    const postedComment = document.createElement('h4');
    postedComment.innerText = messagesArray[i].comment;
    postedComment.classList.add(".message-container__top__list__message");

    li.appendChild(postedName);
    li.appendChild(postedDate);
    li.appendChild(postedComment);
    messageList.appendChild(li);
    }    
}

    function loadMessages(){
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`).then((response)=>{
        console.log(response.data);

        appendMessages(response.data);
    });
    }
    loadMessages();



    //Function to post new messages

    function postNewComments(name, comment){
        axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${key}`,{
            name: name,
            comment: comment,
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error)
        });        
        }
    
        messageForm.addEventListener('submit', (event)=>{
            event.preventDefault();

            postNewComments(event.target.name.value, event.target.comment.value);
        });

        postNewComments();

// const messages = [
//   {
//     name: 'Connor Walton',
//     date: '02/17/2021',
//     message: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
// },
// {
//     name: 'Emilie Beach',
//     date: '01/09/2021',
//     message: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
// },
// {
//     name: 'Miles Acosta',
//     date: '12/20/2020',
//     message: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
// }];

// function messages(){
//   axios
//   .get(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)
//   .then(res =>{
//     console.log(res.data);
//     res.data.sort((a,b)=> b.timestamp - a.timestamp);
    
//     for (let i=0;  i < res.data.length; i++){

    
//     }
//   })
// }

//To post comments



// messageForm.addEventListener("submit", (event) =>{
//   event.preventDefault();
//   console.log(event.target.userName.value); 
//   console.log(event.target.message.value);
 

//   console.log(event);

//   let userName =event.target.userName.value;  
//   let message = event.target.message.value;
  
//   const newMessage = {
//     name: userName,
//     message: message,    
//   };  

    
//  // newMessage.createElement('li');
// //  newMessage.classList.add('message-container__top__list__item');

//   messages.unshift(newMessage);

//    const divElementAvatar = document.createElement('div');
//    divElementAvatar.classList.add(".message-container__top__list__avatar");

//   const listItem = document.createElement('li');
//   listItem.classList.add('message-container__top__list__item');
//   listItem.innerText = newMessage.name;

//   const dateItem = document.createElement('p');
//   dateItem.classList.add('message-container__top__list__item');
//   listItem.dataset = newMessage.date;

//   const messageItem = document.createElement('h4');
//   messageItem.classList.add('message-container__top__list__message');
//   messageItem.innerText = newMessage.message;
 
//   const hrItem = document.createElement('hr');
//   hrItem.classList.add(".message-container__top__list")


//   messageList.appendChild(divElementAvatar)
//   messageList.appendChild(listItem); 
//   messageList.appendChild(dateItem);
//   messageList.appendChild(messageItem);
//   messageList.appendChild(hrItem);

  
// });



// appendMessages();



// ///Display messages

// //   function displayMessage(message) {
// //     const messageLi = document.createElement("li");
   
// //   }

// // function appendMessages() {
// //   messageList.innerText = "";
// //   for (let i = 0; i < messages.length; i++) {
// //     displayMessage(messages[i]);

  

// //     const postedName = document.createElement("h3");
// //     postedName.innerText = messages[i].name;
// //     postedName.classList.add(".message-container__top__list__username");

// //     const divElement = document.createElement('div');
// //     divElement.classList.add(".message-container__top__list__avatar");

// //     const postedDate = document.createElement("p");
// //     postedDate.innerText = messages[i].date;
// //     postedDate.classList.add(".message-container__top__list__date")

// //     const postedComment = document.createElement("h4");
// //     postedComment.innerText = messages[i].message;
// //     postedComment.classList.add(".message-container__top__list__message")

// //     const hrElement = document.createElement('hr');
// //     hrElement.classList.add(".message-container__top__list")

// //     messageList.appendChild(divElement);
// //     messageList.appendChild(postedName);
// //     messageList.appendChild(postedDate);
// //     messageList.appendChild(postedComment);
// //     messageList.appendChild(hrElement);
// //   }
// // }

// // appendMessages();