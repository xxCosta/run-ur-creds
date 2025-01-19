# run-ur-creds
authentication using phone number


## Using Twilio
 you dont need to call twillo with these args,
 they're just taken from env automatically

 const sid = Bun.env.TWILIO_ACCOUNT_SID
 const auth = Bun.env.TWILIO_ACCOUNT_AUTH

 const client = twilio(sid,auth)

 tuns into

 const client = twilio

## Using Requests Folder
remember to export your .env file with the following:
export $(cat .env | xargs)
