
async function getposts(){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const result =posts.map(function(post) {
    
    return `   
    <div class = "note">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </div>`;
 
}).join('');

console.log(result);
document.querySelector(".posts").innerHTML = result;

}
getposts();
