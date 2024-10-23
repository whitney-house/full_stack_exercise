const Header =(props) =>{
  return (
    <div>
      <h1>{props.c.name}</h1>
    </div>
  )
}
const Part =(props)=>{
  return(
    <div>
      <p>{props.p.name} {props.p.exercises}</p>
    </div>
  )
}
const Content =(props) =>{
  return (
    <div>
      {props.c.parts.map(part=> (
        <Part p={part}/>
      ))}
    </div>
  )
}
const Total =(props) =>{
  let total = 0 
  props.c.parts.forEach(part =>{
    total += part.exercises
  })
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}


const App = () =>{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header c={course} />
      <Content c={course} />
      <Total c={course} />
    </div>
  )
}

export default App