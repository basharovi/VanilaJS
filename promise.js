function getProduct(id) {
    let productPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id > 0){
          let dummyProduct = {
            id : 1,
            name : 'shampoo'
          };
          resolve(dummyProduct);
        }
        else{
          let err = new Error('Internal server error');
          reject(err);
        }
      }, 2500);
    });
  
    return productPromise;
  }
  
  let apiRes = getProduct(0);
  console.log(apiRes);
  
  apiRes
  .then( function(data) {
    console.log(data)
  })
  .catch( function(err) {
    console.error(err.message);
  });