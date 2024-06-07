const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "kfLVAz2wstDr5SdaBx8kW7WnSOipT469q23MzW6epUg";
let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    //console.log(data)

    if(page==1)
    {
        searchResult.innerHTML = "";
    }
    const results=data.results;
    results.map((result) => {
        //create new img element
        const image = document.createElement("img"); 
        //img link which redirects
        image.src = result.urls.small; 

        //create new a element
        const imageLink = document.createElement('a');
        //add user's link in a tag
        imageLink.href = result.links.html;

        //open link in new tab
        imageLink.target = "_blank";

        imageLink.appendChild(image); //img inside a tag
        searchResult.appendChild(imageLink);

    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})