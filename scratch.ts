how do i return the thing thats missing. say username is missing, how do i view that information       

if (!user.name || !user.username || !user.phone){
            throw new Error("you need phone and name to continue")
        }
