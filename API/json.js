
const jsonsr=document.getElementById('jsone').addEventListener('click',function jsons(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
        .then((data) => displayUsers(data))
        // .catch(error => console.error('error code ', error))
})

// function displayUsers(User){
//     for(const dataOf of User){
//         console.log(dataOf.address.geo.lng);
//     }
// }

function displayUsers(User){
    const ul = document.getElementById('users-list');
    for(const dataOf of User){
        // console.log(dataOf.name);
        const li = document.createElement('li');
        li.innerText = dataOf.name;
        ul.appendChild(li);
    }
}