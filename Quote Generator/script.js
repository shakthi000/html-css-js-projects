const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generateBtn');


generateBtn.addEventListener('click', () => {
    
    generateBtn.innerText = "Generating Quote...";
    
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = `${data.content} - ${data.author}`;
            quoteElement.innerText = quote; // displays quote and author derived from above
            generateBtn.textContent = "Generate Quote";
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteElement.innerText = "An error occured while fetching the quote." // displays this msg along with error code
            generateBtn.textContent = "Generate Quote";
        });
});