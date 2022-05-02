// Ude Import export (MANDATORY)
import {
    navbar
} from '../components/navbar.js';

document.getElementById('navbar').innerHTML = navbar();



import {
    search
} from './search.js'

document.getElementById('search').innerHTML = search();

let searchnews = async (query) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}` {
            method: 'POST',
            mode: 'no-cors',

            headers: {
                'content-type': 'application/json',
            },
        })

        let data = await res.json();
        return data;
    } catch (err) {
        console.log('err')
    }
};

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
        })
        mainid.append(img, div)

        _container.append(mainid);


    })
}