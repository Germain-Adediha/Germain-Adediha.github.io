// Select the elements
var userInput = document.getElementById('feedback-text');
var sendButton = document.getElementById('sendFeedbackButton');

// Add click event listener to the button
sendButton.addEventListener('click', function() {
  // Get the user input value
  var message = userInput.value;
  
  // Create a mailto link with the user input as the body
  var mailtoLink = 'adedihagermain@gmail.com?body=' + encodeURIComponent(message);
  
  // Open the default email client with the mailto link
  window.open(mailtoLink);
});
