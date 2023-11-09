const API_KEY="75a7e7152bc244d0a4f48ce077e4291d";

const url= "https://newsapi.org/v2/everything?q=";





// category page script

function categorynews(button){
    document.getElementById("cat-container").style.display = "none";
    document.getElementById("category-heading").style.display = "none";
    const query1 = button.dataset.name;
    fetchNews(query1);
    document.getElementById("latest-news").style.display = "flex";
    query2=query1.charAt(0).toUpperCase() + query1.slice(1);
    document.getElementById("cat-heading").innerHTML = `${query2} News` ;
}


   
if ((window.location.pathname === "https://news-hub-website.netlify.app/")) {
    // The current page is index.html
    let query = "india";
    fetchNews(query);
  } else {
    let query1 = button.dataset.name;
    query=query1;
    fetchNews(query);
  }


function fetchNews(query) {
    // Example fetch request
    fetch(`${url}${query}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            displayLatestnews(data.articles);
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}




function displayLatestnews(articles) {
    const container = document.getElementById('latest-news');
    document.getElementById("latest-news").style.display = "flex";
    articles.forEach((item) => {
        if(!item.urlToImage) return;
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.innerHTML = item.title;
        
        const img = document.createElement('img');
        img.src = item.urlToImage;
        
        const desc = document.createElement('p');
        desc.innerHTML = item.description;

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(desc);
        container.appendChild(card);
    });
}


