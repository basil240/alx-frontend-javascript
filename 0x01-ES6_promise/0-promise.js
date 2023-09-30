const promise = new Promise((resolve,reject) => {
	setTimeout(()=> {
	  resolve("Data back from server")
	}, 3000);
	setTimeout(()=> {
          reject("No Data back from server")
        }, 2000);
});

promise.then((response) => {
	log(response);
})

};

