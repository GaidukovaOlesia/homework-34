// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)


let img = document.createElement("img");

function getRandomImage() {

    const images = ["1.jfif",
        "2.jfif",
        "3.jfif",
        "4.jfif",
        "5.jfif",
        "6.jfif",
        "7.jfif",
        "8.jfif",
        "9.jfif"];
    return Math.floor(Math.random()*(images.length-1) + 1);
}

img.setAttribute("src", `images/${getRandomImage()}.jfif`);
img.setAttribute("alt", "Photo");
img.style.width = `500`;
img.style.height = `400px`;
document.body.append(img);
