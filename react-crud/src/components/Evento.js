import style from './css/Generic.module.css'
import { useRef } from "react";


export default function Registration() {
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()


    const GetData = (e) => {
        e.preventDefault();
        RegistUser(firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value, passwordRef.current.value)
        e.target.reset()
    };

    return (
        <form onSubmit={GetData} className={style.evento}>
            <label for="full-name">First Name:</label>
            <input ref={firstnameRef} type="text" name="full-name" />
            <label for="full-name">Last Name:</label>
            <input ref={lastnameRef} type="text" name="full-name" />
            <label for="email">Email:</label>
            <input ref={emailRef} type="email" name="email" />
            <label for="pwd">Password:</label>
            <input ref={passwordRef} type="password" name="pws" />
            <input type="submit" value="submit" />
        </form>
    )
}

async function RegistUser(firstname, lastname, email, password) {
    const response = await fetch('https://fakestoreapi.com/users', {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            name: {
                firstname: firstname,
                lastname: lastname
            }
        })
    });

    const data = await response.json();
    alert("user registrated: " + data.id)
}   