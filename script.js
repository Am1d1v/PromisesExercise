


/*

const res = fetch('https://dummyjson.com/products/1');
console.log(res);

*/



fetch('https://dummyjsons.com/products')
    .then(
        response => {
            console.log(response),
             response.json()
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
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally");
    });

    