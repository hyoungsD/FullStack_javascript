// switch case


let menu = 2;
switch(menu){
    case 1:
        console.log('아메리카노');
        break;
    case 2:
        console.log('카페라떼');
        break;
    case 3:
        console.log('카푸치노');
        break;
    default:
        console.log('없는 메뉴입니다')
}


let brower = 'Chrome';
let browerName;
switch(brower){
    case 'Edge':
        browerName = '엣지'; break;
    case 'FF':
        browerName = '파이어폭스'; break;
    case 'Chrome':
        browerName = '크롬'; break;
    case 'Opera':
        browerName = '사파리'; break;
    default:
        browerName = '알려지지 않은 브라우저';
}
console.log(`브라우저명은 ${borwerName}`);
