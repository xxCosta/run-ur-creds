import { Elysia } from 'elysia'
import { Database } from 'bun:sqlite'
// import twilio from 'twilio'
//
//  const sid = Bun.env.TWILIO_ACCOUNT_SID
//  const auth = Bun.env.TWILIO_ACCOUNT_AUTH
//
//  const client = twilio(sid,auth)
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

// const db = new Database("test1.sqlite")
const db = new Database("")
db.query("CREATE TABLE test (name,username,number,email,password);").run()

type PhoneUser = {
    name: string,
    username: string,
    phone?: string,
}

const alreadyRegistered = (username:string):boolean => {
    const query = db.query("SELECT * FROM test WHERE username=?1")
    const result = query.get(username)
    return result != null
}


const server = new Elysia()
    .get('/',() => {
        let m = "hello"
        return m
    })
    .post('/newUserPhone',(context) => {
        let user = context.body as PhoneUser
        if (!user.name || !user.username || !user.phone){
            const requiredFields = ["name", "username", "phone"]
            const missingFields = requiredFields.filter(field => {
                !user[field as keyof PhoneUser]
            })
            console.error(
                `error adding ${user.username} to database`,
                '\n',
                `missing fiedls: ${missingFields}`
            ) 
            throw new Error(`mans needa run ur ${missingFields} to fawad` ) 
        }
        if (alreadyRegistered(user.username)){
            console.error(
                `error adding ${user.username} to database`,
                '\n',
                `user already exists`
            ) 
                throw new Error('ur already on the list fam')
        }

        const addUser = db.query("INSERT INTO test (name, username, number) values (?1, ?2, ?3);")
        addUser.all(user.name,user.username,user.phone) 
        
        console.log(`${user.username} just joined`)
        return `user ${user.username} added succesfully`
    })
    .post('/newUserEmail',(context) => {
        // SETUP A NEW USER USING EMAIL
        console.log(context.body)
        return "hello"
    })
    .listen(3000)

console.log(`shes up on ${server.server!.port}`)

