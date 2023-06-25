


/*

const res = fetch('https://dummyjson.com/products/1');
console.log(res);

*/

fetch('https://dummyjson.com/products')
    .then(
        response => {
            console.log(response),
             response.json()
        },
        error => console.log(error)
    )
    .then(({ products }) => {
   // console.log(products);
   return fetch('https://dummyjson.com/products/' + products[0].id);
},
error => console.log(error)
)
    .then((response) => {
       return response.json();
})
    .then((data) => {
        console.log(data);
    })