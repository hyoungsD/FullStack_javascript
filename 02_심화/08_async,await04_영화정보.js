// 1. 데이터 가져오기
async function fetchMovieData(url){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('요청에 실패, 상태코드: ' + response.status);
    }
    const data = await response.json();
    return data;
}

// 2. 데이터 검증
function validateMovieData(data){
    if(!data.articleList || data.articleList.length === 0){
        throw new Error('데이터가 없습니다');
    }
}

// 3. 영화 정보 추출
function extractMovieInfos(articleList){
    return articleList.map((article, idx) => ({
        title: article.title,
        rank: idx + 1,
    }))
}

// 4. 영화 출력
function displayMovies(movieInfos){
    for(const movie of movieInfos){
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}

const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

async function movies(){
    try{
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
    }catch(err){
        console.error('에러 발생: '+ err.message);
    }
}

movies();
