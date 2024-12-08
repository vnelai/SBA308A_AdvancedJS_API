//Function for displaying images on page
export function displayImage (url) {
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