// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


//const API = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${Code}`
// https://masai-mock-api.herokuapp.com/news?q={query}


import {
    navbar
} from '../components/navbar.js';

document.getElementById('navbar').innerHTML = navbar();

let SearchNews = async (query) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}` {
            method: 'POST',
            mode: 'no-cors',

            headers: {
                'content-type': 'application/json',
            },
        })

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
        SearchNews(query).then((data) => {
            console.log(data);
            let container = document.getElementById('results');
            container.innerHTML = null;

            append(data, container);
        })

    }
}


export {
    search
}


document.getElementById('search_input').addEventListener('keydown', search);



let appended = (data, _container) => {
        _container.innerHTML = null
        data.map(({
                    urlToImage,
                    description,
                    title
                }) => {
                    let mainid = document.createElement('div');
                    mainid.setAttribute('class', ' mainid')
                    let img = document.createElement('img');
                    img.src = urlToImage;

                    let div = document.createElement('div');
                    div.setAttribute('id', 'results')

                    let h3 = document.createElement('h3');
                    h3.innerHTML = title;
                    let p = document.createElement('p');
                    p.innerHTML = description;

                    div.append(h3, p);
                    div.addEventListener('click', function () {
                        show(urlToImage, description, title)
                        img.src = image

                        h3.innerText = news;

                        div.append(img, h3)
                        _container.append(div);



                    })
                }