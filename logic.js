// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
Toggle.addEventListener("click", function () {
if (mode === 'dark'){
    mode = 'light';
    CSSContainerRule.setAttribute('class', 'light');
} else {
    mode = 'dark';
    CSSContainerRule.setAttribute('class', 'dark');
}
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function(){
    const blogData = JSON.parse(localStorage.getItem("blogData"));
    if (!blogData){
        return [];
    }
    return blogData;
}
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const localStorage = function(newData){
}
// ! Use the following function whenever you need to redirect to a different page
let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
