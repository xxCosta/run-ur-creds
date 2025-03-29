const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const randomWholeNumber = () => {
        
    function randomNumber1(){
        return Math.floor(Math.random() * 10)
    }

    function randomNumber2(){
        return Math.floor(Math.random() * 10)
    }

    let n = Number(`${randomNumber1()}${randomNumber2()}`) 
    return n
}

const alphabetNum = () => {
    let n = randomWholeNumber()
    while(n >= 26){
        n = randomWholeNumber()
    }
    return n
}


let codeLength = 3
let cAlpha = []
let cNums = []
for (let i = 0; i  < codeLength; i ++) {
    let p = alphabetNum()
    let q = randomWholeNumber()
    cAlpha.push(alpha.at(p)) 
    if (cNums.length < 3){
        cNums.push(q) 
    }
}

console.log(cNums)
