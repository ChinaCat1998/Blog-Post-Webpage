// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.querySelector(".back-button");
// TODO: Create a function that builds an element and appends it to the DOM
const cardContainer = document.getElementById('card-container');

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPostsMessage() {
    const message = document.createElement('p');
    message.textContent = "No blog posts available.";
    cardContainer.appendChild(message);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function(){
    const blogData = readLocalStorage();
    if (blogData.length === 0){
        noPostsMessage();
    } else {
        blogData.forEach(function(blogPost){
            const card = createCard(blogPost.title, blogPost.content);
            cardContainer.appendChild(card);
        });
    }
}
// TODO: Call the `renderBlogList` function
console.log(renderBlogList());

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
const redirectPage = function() {
    redirectPage("index.html");
    backButton.addEventListener('click', function);.preventDefault();

}