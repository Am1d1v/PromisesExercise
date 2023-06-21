


/*

const res = fetch('https://dummyjson.com/products/1');
console.log(res);

*/

fetch('https://dummyjson.com/products/1')
    .then((response) => {
    console.log(response);
   return response.json();
  // return response.text();
})
    .then((data) => {
    console.log(data);
});