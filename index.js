const promiseOne =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3);
    },5000);
    
}); 

const promiseTwo =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Boo!");
    },5000);
}); 
const onFullfillment=(textmessage)=>{
    console.log("Exercise 1 :",textmessage);
};
const onRejection=(error)=>{
    console.log("Exercise 2 :",error);
};

promiseOne.then((onFullfillment) => {  
    console.log('Promise constructor for Resolve --:  '+onFullfillment);
});

promiseTwo.catch((onRejection) => { 
    console.log('Promise constructor for Reject --: '+onRejection);
});

