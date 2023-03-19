// <!--В index.html-->
// <!--1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.-->
<!--3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку xxxx.html, котра має детальну інфорацію про об'єкт на який клікнули-->




let url = new URL ('https://jsonplaceholder.typicode.com/users')
fetch(url)
    .then((response) => response.json())
    .then(users => {
        for (const user of users){
            let div  = document.createElement('div');
            let li = document.createElement('li')
            li.innerText = `${user.id} ${user.name} `;
            let a= document.createElement('a');
            a.href = `user-index.html?data=`+ JSON.stringify(user);
            a.innerText = "user";
            div.appendChild(li)
             //a.href = `user-index.html?data=${user.id}`;
            div.appendChild(a);
            li.style.color ="green"
            document.body.appendChild(div);
        }
    });
