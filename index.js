import { fetchCatPhotoApi } from "./api.js";
import { displayImage } from "./displayImage.js";

//Add Event listener to newImageButton
const getNewImage = document.getElementById("newImageButton");
getNewImage.addEventListener("click", () => fetchCatPhotoApi());


//Add event listener for the search button
const searchButton = document.getElementById("searchButton")
const searchInput = document.getElementById('searchInput');;
searchButton.addEventListener("click", searchCatPhotos);


// Function for searching inputs
async function searchCatPhotos() {
    const input = searchInput.value.trim(); //Trim input from spaces
    if (input) {
        fetchCatPhotoApi(input); //pass search into API function to get relevant images
    } else {
        alert("Please enter a search input!"); //If user doesn't enter an input throw alert
    }
}
