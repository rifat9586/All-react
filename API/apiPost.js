function loadPosts(){
    // console.log('login post')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
        .then(post => displayPosts(post))
}
 
function displayPosts(data){
    const postsContainer = document.getElementById('posts-container');
    for(const user of data){
        console.log(user);
        const postDiv=document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML= `
        <h4>User- ${user.id}</h4>
        <h5>Post: title ${user.title}</h5>
        <p>Post Description ${user.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}


loadPosts();