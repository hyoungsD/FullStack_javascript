const items = [
    {name: 'Apple', price: 50},
    {name: 'Banana', price: 10},
    {name: 'Mango', price: 30},
];

// item의 가격을 기준으로 정렬
items.sort((a, b) => a.price - b.price);
console.log(items);

items.sort((a, b) => b.price - a.price);
console.log(items);
