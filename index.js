
//Add Event listener to newImageButton
const getNewImage = document.getElementById("newImageButton");
getNewImage.addEventListener("click", fetchCatPhotoApi);

//Add functionality to callback function
async function fetchCatPhotoApi (input = "") {
    try {
        //If user searches for a value then display images that match the value or else generate random picture 
        let url;
        if (input) {
            url = `https://cataas.com/cat/says/${encodeURIComponent(input)}?position=center`;
        } else {
            url = "https://cataas.com/cat?position=center";
        }

        //Get a cat image from API
        const response = await fetch(url);

        //If network connection fails throw an error
        if (!response.ok) {
            throw new Error("Network response failed");
        }

        //Get the cat image url from the API response
        const imageUrl = response.url;
        //Call function to display cat images
        displayImage(imageUrl);
    } catch (error) {
        console.error("Error getting cat photo:", error); //If issue with fetching api data, display error
    }
}

//Function for displaying images on page
function displayImage (url) {
    const gallery = document.getElementById("gallery");

    //Clear previous images in gallery
    gallery.innerHTML = "";

    //Create new image element
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Random Cat Photo";

    //Append new image element to gallery-container
    gallery.appendChild(img);
}

//Add event listener for the search button
const searchButton = document.getElementById("searchButton")
const searchInput = document.getElementById('searchInput');;
searchButton.addEventListener("click", searchCatPhotos);

//Function for searching inputs
async function searchCatPhotos(){
    const input = searchInput.value.trim(); //Trim input from spaces
    if (input) {
        const imageUrl = await fetchCatPhotoApi(input); //pass search into API function to get relevant images
        if (imageUrl) {
            displayImage(imageUrl); //Display image that correlates to input
        }
    } else {
        alert("Please enter a search input!"); //If user doesn't enter an input throw alert
    }
}