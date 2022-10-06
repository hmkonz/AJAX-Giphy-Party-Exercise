async function getGiphy(input) {
  const result = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  // create a new div element to be appended to by each new image
  const newDiv = document.createElement("div");
  // add class name for styling
  newDiv.classList.add("newDiv");
  if (result.data.data.length !== 0) {
    // create a new image element and assign its url to one picked at random
    const img = document.createElement("img");
    let randomNum = Math.floor(Math.random() * result.data.data.length);
    img.src = result.data.data[randomNum].images.original.url;
    // append the img to the new div element and append both of those to the span element
    $("#container").append(newDiv).append(img);
  } else {
    alert("Try again! There are no results for that search term.");
  }
}

// select the submit button element
const btn = document.querySelector("#getGifsBtn");

// add an event listener to the button so that when clicked on, the input value is selected and used as the parameters for the getGiphy function
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const input = document.querySelector("#search");
  getGiphy(input.value);
  // resets the input box to empty
  input.value = "";
});

const removeBtn = document.querySelector("#removeBtn");

// when the 'removeBtn' is clicked on, the container is emptied of all the images and the remove button
$("#removeBtn").on("click", function (event) {
  $("#container").empty();
});
