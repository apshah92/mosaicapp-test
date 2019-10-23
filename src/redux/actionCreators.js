import FETCH_NEWS from './actionTypes';
import NEWSAPI_KEY from '../configs/keys';

function getNews(query) {    
    return async function(dispatch) {
        const res = await fetch('https://newsapi.org/v2/everything?q='+query+'&from=2019-09-23&sortBy=publishedAt&apiKey='+NEWSAPI_KEY, {mode: 'cors'});
        const data = await res.json();
        var { articles } = data ;
        //console.log(data.articles);
        dispatch({type: FETCH_NEWS, payload: articles});
    }
  }



export default getNews;