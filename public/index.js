function handleClick(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("articles");

    axios.get(url).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}

function handleClickPut(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("articles"); 
    let name = document.getElementById("articles_id").value;
    let body = { "name": name };
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.put(url, body, config).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}

function handleClickPost(route){
    let url = "http://localhost:3000/" + route;
}

let el = document.getElementsByClassName('scroll_list');
for(let i = 0 ; i  < articles.length ; i++){
    let op = document.createElement("option");
    op = articles[i];
    el.appendChild(op);
}

pasteData(articles)