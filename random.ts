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

const randomSingleDigit = () => {
    return Math.floor(Math.random() * 10)
}

const alphabetNum = () => {
    let n = randomWholeNumber()
    while(n >= 26){
        n = randomWholeNumber()
    }
    return n
}


const codeLength = 3
let codeArr = []
for (let i = 0; i  < codeLength; i ++) {
    const alphaNum = alphabetNum()
    const letter = alpha.at(alphaNum)?.toUpperCase()
    const number = randomSingleDigit()
    codeArr.push(letter) 
    codeArr.push(number)
}

const code = codeArr.join("")
//console.log(code)

export default code
// module.exports = code 

