
    // import {displayMessages} from './chatbox_manager.js';
    // import {oop_explanation.json} from './data';

// fetch('data/oop_explanation.json');
    // .then(response => response.json());

    // async function getData(request){
    //     try{
    //         const response = await fetch('../data/oop_explanation.json');
    //         const data = await response.json();
    //         result = data[request];
    //         return result;
    //     }
    //     catch(error){
    //         window.alert(error.message);
    //     }
    // }




    const chatMessagesElement = document.getElementById("chat-messages"); //getting the whole chat message
    const messageInputElement = document.getElementById("user_question");// getting the user input
    const sendButtonElement = document.getElementById("SendQuestion"); // getting the send button
    const messages = JSON.parse(localStorage.getItem("messages")) || [];//loading the messages from local storage




//--------------------BUTTON-----------------------------------//

    const handleButton = async () => {
        const inputText = messageInputElement.value;

        if(inputText){

//------------------------------------------------------------------------------------------
            const userInput = {
                                text:inputText,
                                type:"user_request"}; //getting the input message value

            messages.push(userInput.text);//add the message to the messages array

 //-alert   alert((userInput.type))

            //then saving it to the local storage
            localStorage.setItem('messages', JSON.stringify(messages));

            // const result = {
            //                 // text: fetch('../data/oop_explanation.json')
            //                 //         .then(response=>response.json())
            //                 //         .then(data => data[userInput.text]),
            //                 text:"datA",//getData(userInput.text),
            //                 type:"response"
            // };
            // messages.push(result.text);
 //-alert   alert((result.text))
        //     //getting answer from the dataset -server response
        //     const result = data["message"];
        //     // alert(result);
        //     //store the answer
        //     //messages.push(result);
        //     //saving result to local storage
        //   localStorage.setItem('messages', JSON.stringify(messages));

                displayMessages(messages);//showing then the page with  updates messages.



//----------------------------------SEND DATA ------------------------------//

const sendData = async() =>{
    // get the user input
    //prepare the data to send in json format
    const data  = inputText;//{text: inputText};//inputText;// {text: inputText};

    try{
        //Send a post request to the backend API endpoint 
        const response = await fetch(`http://127.0.0.1:8000/api/sendData?data=${encodeURIComponent(data)}`, {
            method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data) // convert data to JSON string
        // 
    });
        
        if (response.ok){
            window.alert("1 - Data sent successfully");
        }
        else{
            window.alert('2 - Error EUH data', response.status);
        }
    }
    catch(error){
        console.log("Error sending data", error);
    }
};

//------------------------------------- GET DATA -----------------------------------//

const getData = async () =>{
    try{
        //send a get request to the the backend API endpoint
        const response = await fetch('http://127.0.0.1:8000/api/getData');
        var x = response.json();

        
        if (response.ok){
            //parse the response data as json
            const data = await response.json();
            window.alert('4 - Received Data', data);
            

            // const result = {
            //             text:data['answer'],
            //             type:"response"
            //     };
            // messages.push(result.text);


        }
        else{
            alert("5 - Error retrieving data", response.status);
        } 
    }
    catch(error){
        alert("6 - Error fetching data", error);
    }  
    
//     const result = {
//         // text: fetch('../data/oop_explanation.json')
//         //         .then(response=>response.json())
//         //         .then(data => data[userInput.text]),
//         text:data['answer'],//getData(userInput.text),
//         type:"response"
// };
// messages.push(result.text); 
    // if (data){
    //     return data;
    // }
};

//  --------------------------------------------------------------------------------------------

            await sendData();
            await getData();
            // messageInputElement.value="";

        }
        else{
            window.alert("Enter your question!");
        }

    };
    

    // const messages = JSON.parse(localStorage.getItem("messages")) || [];//loading the messages from local storage


     function displayMessages(messages){

        chatMessagesElement.innerHTML = messages.map(message => {//`<p class="user_request"> ${message}</p>`).join('');
        // chatMessagesElement.innerHTML = messages.map(message => `<p class="answer"> ${message}</p>`).join('');
            // si l'index du message est pair alors on l'affiche en couleur X, sinon en couleur Y //
            //  if (message.type =='user_request'){
            //     return `<p class="user_request"> ${message}</p>`;
            //  }
            if (messages.indexOf(message)%2==0){
                return `<p class="user_request"> ${message}</p>`;
            }
             else if(message.type =='response'){
                return `<p class="response">  ${message}</p>`;
             }
             else{
                return `<p class="response"> ${message}</p>`;
             }
        }).join('');
        chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }

    displayMessages(messages);//show messages on page load

    
// adding an event listener to the send button
    sendButtonElement.addEventListener('click',handleButton)
    
    // () => {
        
    //     if (messageInputElement.value !=""){ ///checking if there is a message

    //                 }
    //         //messageInputElement.value="";
    //         //getData()-----------------------------------------------------------------------------REVOIR CETTE LIGNE-----------------------------------------------------------------------------
    //         // alert(typeof(chatMessagesElement))

    //     });


        // const data = require('../data/oop_explanation.json');
        // RECHERCHE DE LA QUESTION DANS LA BASE //
        

// clear the local storage when the page is reloaded
// window.addEventListener('unload', function(){sessionStorage.setItem('isRealoading','true');});
// window.addEventListener('load', function(){
// if(!sessionStorage.getItem('isRealoading')){
//     localStorage.clear();
// }
// sessionStorage.removeItem('isRealoading');
// });





