


/*

const res = fetch('https://dummyjson.com/products/1');
console.log(res);

*/

fetch('https://dummyjson.com/products')
    .then((response) => {
    console.log(response);
   return response.json();
  // return response.text();
})
    .then(({ products }) => {
   // console.log(products);
   return fetch('https://dummyjson.com/products/' + products[0].id);
})
    .then((response) => {
       return response.json();
})
    .then((data) => {
        console.log(data);
    })