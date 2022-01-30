import logo from './logo.svg';
import {useEffect, useState} from "react";
import db from './firebase';
import './App.css';
import { onSnapshot, collection, addDoc, doc } from 'firebase/firestore';

function App() {

  const [students,setStudents] = useState([]);

  console.log(students);
  useEffect(()=>{
    const unsub = onSnapshot(collection(db,"students"),(snapshot)=>{
      setStudents(snapshot.docs.map(doc=>doc.data()));
    });
    return unsub;
  },[]);
  const handleNew = async()=>{
    const firstName =prompt("Enter First Name");
    const lastName = prompt("Enter lastName");
    const email = prompt("Enter email");
    const loginEmail = prompt("Enter loginEmail");
    const address = prompt("Enter ddress");
    const clas = prompt("Enter clas");
    const physics = prompt("Enter physics");
    const chemistry = prompt("Enter chemistry");
    const maths = prompt("Enter maths");
    const engineering = prompt("True if engineering");
    const collectionRef = collection(db,"students");
    const payload = { firstName,lastName,email,loginEmail,address,class:clas,physics,chemistry,maths};
    await addDoc(collectionRef,payload);
  }
  
  return (
    <div className="row">
      <div className="col-md-8 offset-md-1">
        <br></br>
        <center><button className="btn btn-primary" onClick={handleNew}>New</button></center>
        <ul>
          {students.map((student) =>(
             <li>
               {student.firstName}
               <br></br>
               {student.loginEmail} 
             </li>
          ))}
        </ul>
        {/* <Contacts /> */}

      </div>
    </div>
  );
}

export default App;
