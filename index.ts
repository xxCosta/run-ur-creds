import twilio from 'twilio'

const client = twilio()

const testUser = {
    name: "yosemitesam",
    number: Bun.env.TEST_NUMBER!
}

const newMessage = async(userNumber:string) => {

    const message = await client.messages.create({
        body: "this is the final test",
        to: "+1" + userNumber,
        from: Bun.env.APP_NUMBER
    })
    console.log(message.body)
}

newMessage(testUser.number)

