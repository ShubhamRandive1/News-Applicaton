import {
    navbar
} from '../components/navbar.js';




document.getElementById('navbar').innerHTML = navbar();



import {
    sidebar
} from '../components/sidebar.js';


document.getElementById('sidebar').innerHTML = sidebar();


// let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}`
// https://masai-mock-api.herokuapp.com/news?q={query}

let SearchNews = async (query) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)




        let data = await res.json();

        console.log(data);

        return data;
    } catch (err) {
        console.log('err')
    }
};


let search = (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById('search_input').value;

        console.log(value)
        SearchNews(query).then((data) => {
            console.log(data);
            let container = document.getElementById('results');
            container.innerHTML = null;

            append(data, container);
        })

    }
}


document.getElementById('search_input').addEventListener('keydown', search);

let countries = document.getElementById('sidebar').children;



console.log(countries);


function csearch() {
    console.log(this.id)

    SearchNews(this.id).then((data) => {
        let container = document.getElementById('results');

        append(data.articles, container);
    })
}



for (let el of countries) {
    el.addEventListener('click', csearch)
}