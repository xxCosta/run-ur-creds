import twilio from 'twilio'

// you dont need to call twillo with these args,
// they're just taken from env automatiocally
//
// const sid = Bun.env.TWILIO_ACCOUNT_SID
// const auth = Bun.env.TWILIO_ACCOUNT_AUTH
//
// const client = twilio(sid,auth)

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

