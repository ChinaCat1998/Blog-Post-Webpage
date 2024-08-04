// Correctly select the form element
const formElement = document.querySelector('form');
// Function to handle form submission
function formSubmission(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const  username = document.querySelector("#username").value;

    if (!title || !content || !username) {
        alert("Please complete the form");
  return;
 }

const formData = {
    title: title,
    content: content,
    username: username
};

storeLocalStorage(formData);
location.href = "blog.html";
}

const storeLocalStorage = function (newData) {
    const blogData = readLocalStorage();
    blogData.push(newData);
    const blogDataString = JSON.stringify(blogData);
    localStorage.setItem("blogData", blogDataString);

}
const readLocalStorage = function () {
    const blogData = localStorage.getItem("blogData");
    if (blogData) {
        return JSON.parse(blogData);
    } else {
        return [];
    }
}
// Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", formSubmission);
console.log(formElement);

const themeSwitcher = document.querySelector('#toggle');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function ()
  // If mode is dark, apply light background
  
  if (mode === 'dark') {
    container.classList.add('light')
    container.classList.remove('dark')
  }
  else {
    mode = 'dark';
    container.classList.add('dark')
    container.classList.remove('light')
})