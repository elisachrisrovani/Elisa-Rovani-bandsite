const messageForm = document.getElementById("messageForm");
const messageList = document.querySelector(".message-container__top__list");

const messages = [
  {
    name: 'Connor Walton',
    date: '02/17/2021',
    message: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
},
{
    name: 'Emilie Beach',
    date: '01/09/2021',
    message: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
},
{
    name: 'Miles Acosta',
    date: '12/20/2020',
    message: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
}];


//To post comments

messageForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  console.log(event.target.userName.value);
  console.log(event.target.message.value);
  console.log(event);

  let userName =event.target.userName.value;
  let message = event.target.message.value;

  const listItem = document.createElement('li');
  listItem.classList.add('message-container__top__list__item');
  listItem.innerText = userName;

  const messageItem = document.createElement('li');
  messageItem.classList.add('message-container__top__list__message');
  messageItem.innerText = message;


  messageList.appendChild(listItem);
  messageList.appendChild(messageItem);

});



appendMessages();



///Display messages

  function displayMessage(message) {
    const messageLi = document.createElement("li");
    //messageLi.innerText = message.message;
    //messageList.appendChild(messageLi);
  }

function appendMessages() {
  messageList.innerText = "";
  for (let i = 0; i < messages.length; i++) {
    displayMessage(messages[i]);

    // const messageLi = document.createElement("li");
    // messageLi.innerText = messages[i].message;
    // messageList.appendChild(messageLi);

    const postedName = document.createElement("h3");
    postedName.innerText = messages[i].name;
    postedName.classList.add(".message-container__top__list__title")

    const postedDate = document.createElement("p");
    postedDate.innerText = messages[i].date;
    postedDate.classList.add(".message-container__top__list__title")

    const postedComment = document.createElement("h4");
    postedComment.innerText = messages[i].message;
    postedComment.classList.add(".message-container__top__list__title")

    messageList.appendChild(postedName);
    messageList.appendChild(postedDate);
    messageList.appendChild(postedComment);
  }
}

appendMessages();
