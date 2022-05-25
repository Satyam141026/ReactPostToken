
import './App.css';
import {useState } from 'react';
import swal from 'sweetalert';
import { token, url } from './Helper';

function App() {

  const [studentname ,setData]=useState("satyam")
  //useEffect(() => {

  //},[]);
  let myfunction=()=>{

console.log(studentname)
var data={
   "data": {
  "name": studentname 
}
}

fetch(
  url
  , { method: 'POST',
  headers:{
    'Authorization':'Bearer '+token,
    'Content-Type': 'application/json', 
  //'Accept: application/json'
  },
  body: JSON.stringify(data)
}).then((d)=>{console.log(d.status)
if(d.status=== 200){

swal("Great Job","data created success","succss")

}

}).catch((e)=>{

  swal("Great Job","bad","fail")

}).finally((all)=>{
 
  
});
  }
  return (
    <div className="App">
      {studentname }
  <form>
      <label>Enter your name:
        <input type="text" value={studentname} onChange={(e)=>{setData(e.target.value)}} />
      </label>
      <input type="button" name="student" onClick={myfunction} value="save button" />
    </form>
    </div>
  );
}

export default App;