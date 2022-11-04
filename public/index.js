let bienouej = false;

function handleClick(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("all_articles");
    let id = document.getElementById("select_article").value;

    axios.get(url, id).then((res) => {
        let articles = res.data;
        let taille = articles.articles.length;

        console.log(taille);
        if(!bienouej){
            for(let i=0 ; i<taille ; i++){
                let div = document.createElement("div");
                div.innerHTML = JSON.stringify(articles.articles[i]);
                el.appendChild(div);
            }
            bienouej = !bienouej;
        }
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
    };

    axios.put(url, body, config).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}

function handleClickPost(route){
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("add_article");
    let theme = document.getElementById("theme").value;
    let titre = document.getElementById("titre").value;
    let auteur = document.getElementById("auteur").value;
    let body = {
        "theme": theme,
        "titre": titre,
        "auteur": auteur,    
    };
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    axios.post(url, body, config).then((res)=>{
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err)=>{
        console.error(err.message);
        el.innerHTML = err.message;
    })
}   