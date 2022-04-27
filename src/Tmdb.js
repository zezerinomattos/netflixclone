const API_KEY = '1ebe03ef5a131d724309a9c616bec52a';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da Netflix
- recomendados (trending)
- em alta (top reted)
- ação
- comedia
- terror
- romance
- documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    
    return json;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/tremding/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topreted',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/tv?with_genres=25&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/tv?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/tv?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/tv?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    }
}

