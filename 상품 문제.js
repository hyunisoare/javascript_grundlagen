// products 배열을 넣었을 때, 가격이 60000원 이상인 product 객체를
//담은 배열을 반환하는 함수를 만들어라.  
var allProducts = [{
    name: '농구공',
    description: '농구 황제 마이클 조던이 사용한 농구공입니다.',
    price: 100000,
},{
    name: '축구공',
    description: '축구 황제 메시가 사용한 축구공입니다.',
    price: 50000,
},{
    name: '야구공',
    descripttion: '박찬호가 던졌던 야구공입니다.',
    price: 75000
}];

function selectedProd(products){
    let prod = [];
    for (var i=0; i < products.length; i++){
        const product = products[i];
        const price = product.price;
        if (price >= 60000){
            prod.push(product);
        }
    }
    return prod;
    }
//console.log(allProducts("name"));
//selectedProd(allProducts);

console.log(selectedProd(allProducts));

