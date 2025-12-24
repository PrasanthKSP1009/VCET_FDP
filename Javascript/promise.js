var promise = new Promise((resolve, reject) => {
  var success = true;
  var year = 10;
  if (success && year === 10) {
    resolve("LIC was benificial");
  } else {
    reject("LIC wasn't benificial");
  }
});
promise
  .then((sucRespone) => {
    console.log(sucRespone);
  })
  .catch((failRespone) => {
    console.log(failRespone);
  });
