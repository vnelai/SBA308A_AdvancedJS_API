//Cache newImageButton into variable
getNewImage = document.getElementById("newImageButton");

//Add Event listener to newImageButton
getNewImage.addEventListener("click", fetchCatPhotoApi);

//Add functionality to callback function
async function fetchCatPhotoApi () {
    try {
        //Get a cat image from API
        const response = await fetch("https://cataas.com/cat?position=center");

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


