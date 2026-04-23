// rfce && rafc
// import React from 'react'

// function Greeting() {
//   return (
//     <div>Greeting</div>
//   )
// }

import React from 'react'

export const Greeting = (props) => {
  return (
    <div id="greeting">
        <h1>Student Information</h1>
        {props.students.map((student, index) => (
        <div id="box" key={index}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
          <p>Marks: {student.Marks}</p>
        </div>
      ))}
    </div>
  )
}

export default Greeting

// Maximum 1 element returned from a component, wrap in a div or React Fragment
// we have to use closing tags for all elements, even if they are self closing
// use classname in place of class for css classes, because class is a reserved keyword in JavaScript
// use camelCase for event handlers, e.g. onClick instead of onclick
// use curly braces to embed JavaScript expressions in JSX
// components must start with a capital letter, otherwise React will treat them as HTML elements
// Parent component can pass data to child component via props, and child component can access it via props object