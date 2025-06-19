const k = "bob"
const l = "tracy"

const promTest = (name) => new Promise((resolve,reject)=>{
    if(name === "bob"){
        resolve(name)
    }else{
        reject(name)
    }
})

promTest(l)
    .then((name)=>console.log(name))
