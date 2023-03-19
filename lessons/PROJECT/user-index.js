
let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
console.log(user)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then(users => {

        let ul = document.createElement('ul');

        ul.innerText =`${user.id} ${user.name} ${user.username} ${user.email}` +'address'+ JSON.stringify(user.address) + 'company' + JSON.stringify(user.company) + 'email' +JSON.stringify(user.email) + 'id' + JSON.stringify(user.id)+  'name' + JSON.stringify(user.name) + 'phone' + JSON.stringify(user.phone) + 'username' +
            JSON.stringify(user.username) + 'website' +JSON.stringify(user.website);
        ul.style.color = "green";
        ul.style.fontSize ="15px";
        ul.style.fontFamily
        document.body.appendChild(ul);

    });
fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let div1 = document.createElement('div1');
        let a1= document.createElement('a');
        a1.href = `user-index.html?id=${user.id}`;
        a1.innerText = "post of current user";
        div1.appendChild(a1);
        document.body.appendChild(div1);

    });

  let url3 = new URL(location.href);
  console.log(url3);
  let id = url3.searchParams.get('id');
  console.log(id);
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

      .then(resp => resp.json())
      .then(posts => {
          for (const post of posts) {
              let div2 = document.createElement('div2');

              let li2 = document.createElement('li2');
              li2.innerText = `${post.title}`;
              div2.appendChild(li2);
               let a= document.createElement('a');
               a.href = `post-index.html?data=${post.id}`;
              a.innerText = " title  ";
               div2.appendChild(a);

              document.body.appendChild(div2);
          }
      });

