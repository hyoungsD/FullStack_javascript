const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json'

fetch(url)
    .then((response) => {
        return response.json();
    })
    .catch(() => {
        console.log('요청에 실패했습니다')
    })
    .then((data) => {
        if(!data){
            throw new Error('데이터가 없습니다');
        }
        if(!data.articleList || data.articleList.length === 0){
            throw new Error('데이터가 없습니다');
        }
        return data.articleList;
    })
    .catch((error) => {
        console.error('에러 발생:', error.message);
    })
    .then((articles) => {
        return articles.map((article, idx) => {
            return {title: article.title, rank: idx + 1};
        });
    })
    .then((results) => {
        for(let movie of results){
            console.log(`[${movie.rank}위] ${movie.title}`);
        }
    })
    .catch((err) => {
        console.log('<<에러발생>>');
        console.log(err);
    })


