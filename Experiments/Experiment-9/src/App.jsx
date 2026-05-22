import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      alert("Please fill all the fields");
    } 
    else {
      setRegister("Registered Successfully");

      setName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>

        <h1>Registration Form</h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="t1"
          value={name}
          onChange={handleNameChange}
        />

        <input
          type="email"
          placeholder="Enter E-mail"
          className="t1"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="t1"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">
          Register
        </button>

        <h2>{register}</h2>

      </form>
    </>
  );
}

export default App;