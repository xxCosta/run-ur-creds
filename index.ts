import { Elysia } from 'elysia'
import { Database } from 'bun:sqlite'
// import twilio from 'twilio'
//
// const client = twilio()
//
// const testUser = {
//     name: "yosemitesam",
//     number: Bun.env.TEST_NUMBER!
// }
//
// const newMessage = async(userNumber:string) => {
//     await client.messages.create({
//         body: "this is the final test",
//         to: "+1" + userNumber,
//         from: Bun.env.APP_NUMBER
//     })
// }
//
// newMessage(testUser.number)

const db = new Database()
db.query("CREATE TABLE test (name,number,email);").run()



const server = new Elysia()
    .get('/',() => {
        let m = "hello"
        return m
    })
    .post('/newUserPhone',(context) => {
        // SETUP A NEW USER USING PHONE AUTH
        console.log(context.body)
        return "hello"
    })
    .post('/newUserEmail',(context) => {
        // SETUP A NEW USER USING EMAIL
        console.log(context.body)
        return "hello"
    })
    .listen(3000)

console.log(`shes up on ${server.server!.port}`)

