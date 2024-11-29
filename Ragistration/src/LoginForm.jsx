import { useState } from "react"




export const LoginForm = ()=>{

// this is a 1 way of doing by puting handleLoginForm in onchange
    // const [user, setUser] = useState({
    //     userName: "",
    //     password: ""
    // })

// const handleLoginForm = (e) =>{
//     const{name, value} = e.target
//     setUser((Kuchbhi) => ({...Kuchbhi , [name]: value}))
// }


// this is other way of doing direct puthing fat arrow function in onChange in input
const [userName, setUseName] = useState("")
const [password, setPassword] = useState("")

const handleLoginFormSubmit = (event)=>{
    event.preventDefault()
    // console.log(user)


    const loginData = {
        userName,
        password
    }
    console.log(loginData)
}

    return(


<>
<div>
<section className="container">
    <h1>Login Form</h1>

    <form onSubmit={handleLoginFormSubmit}>
<label htmlFor="Username">Username</label>
<input type="text"
placeholder=""
autoComplete="off"
required 
name="userName"
value={userName}
// value={user.userName}
// onChange={handleLoginForm}
onChange={(event)=> setUseName(event.target.value)}
/>
<br/>
<label htmlFor="password">Password</label>
<input type="password"
placeholder=""
autoComplete="off"
required
name="password"
value={password}
// value={user.password}
// onChange={handleLoginForm}
onChange={(event)=> setPassword(event.target.value)}

/>
<br/>
<button>Login</button>
</form>
</section>
</div>
</>
    )
}