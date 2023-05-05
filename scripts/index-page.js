const messageForm = document.getElementById("messageForm");
const messageList = document.querySelector(".message-container__top__list");
const likesBtn = document.querySelector(".message-container__top__list__likes__img");
const key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";




//Function to load posted messages

function appendMessages(messagesArray){
    for (let i = 0; i < messagesArray.length; i++){
    const li = document.createElement('li');

    const divElementAvatar = document.createElement('div');
    divElementAvatar.classList.add(".message-container__top__list__avatar");

    const postedName = document.createElement('h3');
    postedName.innerText = messagesArray[i].name;
    postedName.classList.add(".message-container__top__list__username");

    const postedDate = document.createElement('p');
    postedDate.innerText = new Date (messagesArray[i].timestamp).toLocaleString('en-US').split(',')[0];
    postedDate.classList.add(".message-container__top__list__date");
 
    const postedComment = document.createElement('h4');
    postedComment.innerText = messagesArray[i].comment;
    postedComment.classList.add(".message-container__top__list__message");

    // const postedLikes = document.createElement('h5');
    // postedLikes.innerText = messagesArray[i].likes;
    // postedLikes.classList.add(".message-container__top__list__likes");

    // const imgLikes = document.createElement('img');
    // imgLikes.classList.add(".message-container__top__list__likes__img")
    // imgLikes.src='assets/icons/icon-like.svg';
   

    const hrItem = document.createElement('hr');
    hrItem.classList.add(".message-container__top__list")

    li.appendChild(divElementAvatar);
    li.appendChild(postedName);
    li.appendChild(postedDate);
    li.appendChild(postedComment);
   //li.appendChild(imgLikes);
   // li.appendChild(postedLikes);  
    li.appendChild(hrItem);
    messageList.appendChild(li);
    }    

    }

    function loadMessages(){
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`).then((response)=>{
        console.log(response.data);
        response.data.sort((a,b)=> b.timestamp - a.timestamp);

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

        //Function do add likes

      //  const idLike = messagesArray[i].id;
        // likesBtn[i].addEventListener('click', function(e){
        //     e.preventDefault();
        //     axios.put(`https://project-1-api.herokuapp.com/comments{$idLike}?api_key=${key}`)
        //     .then(response=>{
        //         console.log(response);
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
        // });
s

       
      //Function to delete messages

    //   function deleteComments(){
    //     axios.get(`https://project-1-api.herokuapp.com/id?api_key=${key}`,{
          
    //     })
    //     .then((response)=>{
    //         axios.delete(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
    //         console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     });        
    //     }
        
    //     deleteComments();
       

      
        