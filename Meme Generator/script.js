const generateMemeBtn = document.querySelector(".meme-gen .generate-meme-btn");

const memeImage = document.querySelector(".meme-gen img")

const memeTitle = document.querySelector(".meme-gen .meme-author")


const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.author)
    });
};

const updateDetails = (url, author) => {
    memeImage.setAttribute("src", url);
    memeAuthor.innerHTML = `Meme by: , ${author}`;
}

generateMemeBtn.addEventListener("click", generateMeme)