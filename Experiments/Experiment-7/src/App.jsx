import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const StudentData=[
    { name: 'Rahul Sharma', course: 'Computer Science',Marks:85},
    { name: 'Anita Sharma', course: 'Information Technology',Marks: 92},
    { name: 'Rohan Gupta', course: 'Electroncs', Marks: 78}
  ]

  return (
    <>
    <Greeting students={StudentData}/>


    {/* <Greeting S1={'Rahul Sharma'} C1={'Computer Science'} M1={85} 
      S2={'Anita Sharma'} C2={'Information Technology'} M2={92}
      S3={'Rohan Gupta'} C3={'Electronics'} M3={78} /> */}
      
    </>
  )
}

export default App
