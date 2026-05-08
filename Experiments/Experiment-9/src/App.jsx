import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [register, setregister] = useState('');

  function Namechange(e){
    setname(e.target.value);
  }
  function mailchange(e){
    setemail(e.target.value);
  }
  function passwordchange(e){
    setpassword(e.target.value);
  }
  function submiterror(e){
    e.preventDefault();
    if (name === '' || email === '' || password === ''){
      alert("Please fill all the fields");
    }
    else {
      e.setregister("Registered Successfully");
    }
  }
  return (
    <>
    <form id="form">
      <h1>Registration Form</h1>
      <input type="text" placeholder="Enter Name" class="t1" value={name} onChange={Namechange}></input>
      <input type="email" placeholder="Enter E-mail" class="t1" value={email} onChange={mailchange}></input>
      <input type="password" placeholder="Enter Password" class="t1"
       value={password} onChange={passwordchange}></input>
      <button type="Register" value="Register" onClick={submiterror}>Register</button>
    </form>
    </>
  )
}

export default App
