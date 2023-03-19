// API_Key = "k_h8txyos9"
// Title = "Title"
// http://www.omdbapi.com/?apikey=${API_Key}&t=${Title}

const $ = document;

const searchBtn = $.querySelector('#searchBtn');
const search = $.querySelector('#search');

searchBtn.addEventListener('click', () => {
    const Title = search.value;
    const API_Key = "8e9dfe44&t";

    let refresh = `<span style="color: #fff" class="refresh"></span>`;

    if (Title != "" && Title != " " && Title != "  " && Title != "   " && Title != "    " && Title != "     ") {
        $.querySelector('#Name').innerHTML = refresh;
        $.querySelector('#Plot').innerHTML = refresh;
        fetch(`http://www.omdbapi.com/?apikey=${API_Key}&t=${Title}`)
            .then(Response => Response.json())
            .then(json => {
                if (json.Response) {
                    const title = json.Title;
                    const year = json.Year;
                    const rated = json.Rated;
                    const runtime = json.Runtime;
                    const genre = json.Genre;
                    const poster = json.Poster;
                    const Plot = json.Plot;
                    let imdbRating, metacritic;

                    if (json.Ratings) {
                        if (json.Ratings[0]) {
                            imdbRating = json.Ratings[0].Value;
                        } else {
                            imdbRating = "not found";
                        }
                        if (json.Ratings[2]) {
                            metacritic = json.Ratings[2].Value;
                        } else {
                            metacritic = "not found";
                        }
                    }
                    const type = json.Type;


                    $.querySelector('#Plot').innerHTML = Plot || "(404)";
                    $.querySelector('#Name').innerHTML = title || `( ${Title} ) Not Found`;
                    $.querySelector('#Poster').src = poster || './images/image-not-found.png';
                    $.querySelector('#Title').innerHTML = title || '';
                    $.querySelector('#Year').innerHTML = year || '';
                    $.querySelector('#Rated').innerHTML = rated || '';
                    $.querySelector('#Runtime').innerHTML = runtime || '';
                    $.querySelector('#Genre').innerHTML = genre || '';
                    $.querySelector('#IMDB').innerHTML = imdbRating || '';
                    $.querySelector('#Metacritic').innerHTML = metacritic || '';
                    $.querySelector('#Type').innerHTML = type || '';

                }
            }).catch((err) => {
                console.log(err);
            })
    }
})