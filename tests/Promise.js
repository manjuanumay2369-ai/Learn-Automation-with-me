let p = new Promise((resolve, reject) => {
  let success = true;

  if(success){
    resolve("successfully completed");
  } else {
    reject("something went wrong");
  }
});

p.then(result => console.log(result))
 .catch(err => console.log(err));
