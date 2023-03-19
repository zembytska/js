<!--На странице post-index.html:-->
<!--7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .-->
//<!--8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->


let url = new URL(location.href);
console.log(url);
let data = url.searchParams.get('data');
console.log(data);

fetch(`https://jsonplaceholder.typicode.com/posts/${data}/comments`)

    .then(resp => resp.json())
    .then(posts => {
        for (const post of posts) {
            let div1 = document.createElement('div1');
            let li1 = document.createElement('li1');
            li1.innerText = `${post.id} ${post.name} ${post.email} ${post.body}`
            div1.appendChild(li1);
            li1.style.color = 'green'
            li1.style.fontFamily
            document.body.appendChild(div1);
        }
    });

 fetch(`https://jsonplaceholder.typicode.com/users/${data}/posts`)

     .then(resp => resp.json())
     .then(posts => {
        for (const post of posts) {
            let ul = document.createElement('ul');

            let li = document.createElement('li');
            ul.innerText = `${post.id} ${post.title} ${post.body} `;


            document.body.appendChild(ul);
        }
     });
