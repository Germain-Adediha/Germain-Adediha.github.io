const chatMessagesElement = document.getElementById("chat-messages");
const messageInputElement = document.getElementById("user_question");
const sendButtonElement = document.getElementById("SendQuestion");
const messages = JSON.parse(localStorage.getItem("messages")) || [];
// var test_text = "Le polymorphisme en Java permet à un objet d'adopter différents comportements en fonction du contexte. Il se manifeste par la capacité d'une classe à être traitée comme une instance de sa classe de base ou comme une instance de ses sous-classes.";
const handleButton = async () => {
  const inputText = String(messageInputElement.value.trim());
  // alert(typeof(inputText));
  
  if (inputText) {
    const userInput = {
      text: inputText,
      type: "user_request"
    };

    messages.push(userInput);

    localStorage.setItem('messages', JSON.stringify(messages));

    displayMessages(messages);
    messageInputElement.value = "";
    await sendData(userInput);
    //attente de la reponse
    await getData();
    //attente de la reponse


    // en attente de la reponse
    //---------------------------------------------------setting time out ----------------------------------
    // setTimeout(() => {
    //   console.log("Inside timeout - This code will be executed after the delay");
    //   // Place your code here that you want to execute after the delay
    //   // mettre le code du result
    // }, 2000); // Delay of 2000 milliseconds (2 seconds)
    //---------------------------------------------------setting time out ----------------------------------
    var test_text = "Le polymorphisme en Java permet à un objet d'adopter \
    différents comportements en fonction du contexte. Il se manifeste par \
    la capacité d'une classe à être traitée comme une instance de sa classe \
    de base ou comme une instance de ses sous-classes.";


    const result = {
             text:test_text,//getData(userInput.text),
             type:"response"
            };
        
    messages.push(result);
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages(messages);

    // messageInputElement.value = "";
  } else {
    window.alert ("Enter your question!");
  }
};

const sendData = async (userInput) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/sendData?data=${encodeURIComponent(userInput.text)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain' // Set the content type to plain text
      },
      body: userInput // Send the userInput directly as the request body
  
    });

    if (response.ok) {
      window.alert("Data sent successfully");
    } else {
      window.alert('Error sending data: ' + response.status);
    }
  } catch (error) {
    console.log("Error sending data", error);
  }
};


const getData = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/getData`);
  
    if (response.ok) {
      alert("OK");
      const data = await response.text(); // Receive the response as plain text
      return data; // Return the received data
    } else {
      console.error("Error retrieving data: " + response.status);
      return null; // Return null or any other appropriate value in case of an error
    }
  } catch (error) {
    console.error("Error fetching data: " + error);
    return null; // Return null or any other appropriate value in case of an error
  }
};


// const getData = async () => {
//   try {
//     const response = await fetch('http://127.0.0.1:8000/api/getData');

//     if (response.ok) {
//       const data = await response.json();
//       window.alert('Received Data: ' + data.answer);
//     } else {
//       window.alert("1-Error retrieving data: " + response.status);
//     }
//   } catch (error) {
//     console.log("2-Error fetching data: " + error);
//   }
// };



function displayMessages(messages) {
  chatMessagesElement.innerHTML = messages.map((message) => {
    if (message.type === 'user_request') {
      return `<p class="user_request">${message.text}</p>`;
    } else {
      return `<p class="response">${message.text}</p>`;
    }
  }).join('');

  chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
}

displayMessages(messages);

sendButtonElement.addEventListener('click', handleButton);

const dataset = {
  1:"",
  2:"",
  3:"",
  4:""
}