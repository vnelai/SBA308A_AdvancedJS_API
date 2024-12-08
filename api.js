import { displayImage } from "./displayImage.js";

//Add functionality to callback function
export async function fetchCatPhotoApi (input = "") {
    try {
        //If user searches for a value then display images that match the value 
        //or else generate random picture 
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