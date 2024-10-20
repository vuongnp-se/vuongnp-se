// Function to handle mouse over event
function upDate(previewPic) {
  // Check if the event is triggered by logging to the console
  console.log("Mouse over event triggered");

  // Print alt and src of the previewPic to console
  console.log("Alt text: ", previewPic.alt);
  console.log("Image source: ", previewPic.src);

  // Change the background image of the div with id 'image'
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

// Function to handle mouse out event
function undo() {
  // Reset the background image to the original state
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";

  // Reset the text of the div with id 'image' to the default message
 // imageDiv.innerHTML = "Hover over an image below to display here.";
}
