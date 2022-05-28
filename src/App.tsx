import React, {useState} from 'react';
import './App.css';
type studentsType={
  name:string
  age:number
  isMarried:boolean
  score:number
}
function App() {
  let[students,setStudents]=useState(
   [
    {name:'Andrey',age:43,isMarried:true,score:124},
    {name:'Sergey',age:78,isMarried:false,score:100},
    {name:'Bob',age:23,isMarried:true,score:89},
    {name:'Tom',age:33,isMarried:false,score:99},
    {name:'Mark',age:67,isMarried:true,score:12}
  ])
  function onClickHandler() {
    let sortstudents=[...students].sort((a,b)=>b.name < a.name?-1:1).reverse()
    setStudents([...sortstudents])
  }
  return (
    <div className="App">
     Hey yo
      {students.map(el=>{
        return(
          <div>
            <hr/>
            name: {el.name},
            age: {el.age},
            isMarried: {el.isMarried},
            score: {el.score},
            <hr/>
          </div>
        )
      })}
      <button onClick={onClickHandler}>Sort</button>

    </div>
  );
}

export default App;
