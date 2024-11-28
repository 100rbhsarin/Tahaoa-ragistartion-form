import { useState } from "react"




export const RegistrationForm =()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")


    const handleInputChange = (event)=>{
        const { name, value } = event.target


        switch(name){
            case "firstname":
         setFirstName(value)
           break;

      
            case "lastname":
                setLastName(value)
           break;

          
            case "email":
                setEmail(value)
           break;

          
           case "password":
                setPassword(value)
           break;


           case "phone":
            setPhoneNumber(value)
       break;
    }}


    const handleFormSubmit = (event)=>{
event.preventDefault()
const formData={
    firstName,
    lastName,
    email,
    phoneNumber,
    password
}
console.log(formData)
    }



    return(
        <>
        <section className="formarea">
        <form onSubmit={handleFormSubmit}>
             <div>
                <h1>Sign Up</h1>
                <p>Create your account</p>

<label>
    <h2>First Name</h2>
</label>
<input
type="text"
name="firstname"
placeholder="Your First Name"
required
value={firstName}
onChange={handleInputChange}

/>

<label>
    <h2>Last Name</h2>
</label>
<input
type="text"
name="lastname"
placeholder="Your Last Name"
required
value={lastName}
onChange={handleInputChange}
/>

<label>
    <h2>Email</h2>
</label>
<input
type="text"
name="email"
placeholder="Your Email"
required
value={email}
onChange={handleInputChange}
/>

<label>
    <h2>Password</h2>
</label>
<input
type="password"
name="password"
placeholder="Password"
required
value={password}
onChange={handleInputChange}
/>

<label>
    <h2>Phone Number</h2>
</label>
<input
type="number"
name="phone"
placeholder="Your number"
required
value={phoneNumber}
onChange={handleInputChange}
/>

<div>
    <button type="submit">Sign In</button>
</div>


        </div>
        </form>

        <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is
          <span>{phoneNumber}</span>.
        </p>
      </section>
      </section>
        </>
    )
}





// import { useState } from "react";

// export const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phone: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload
//     console.log(formData);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1>Sign Up</h1>
//           <p>Create your account</p>

//           <label htmlFor="firstName">
//             <h2>First Name</h2>
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="Your First Name"
//             required
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />

//           <label htmlFor="lastName">
//             <h2>Last Name</h2>
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             placeholder="Your Last Name"
//             required
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />

//           <label htmlFor="email">
//             <h2>Email</h2>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             value={formData.email}
//             onChange={handleInputChange}
//           />

//           <label htmlFor="password">
//             <h2>Password</h2>
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={formData.password}
//             onChange={handleInputChange}
//           />

//           <label htmlFor="phone">
//             <h2>Phone Number</h2>
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             placeholder="Your number"
//             required
//             value={formData.phone}
//             onChange={handleInputChange}
//           />

//           <button type="submit">Sign Up</button>
//         </div>
//       </form>
//     </>
//   );
// };
