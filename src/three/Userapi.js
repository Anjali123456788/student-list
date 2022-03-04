// import React, {useEffect,useState} from "react";
//  import './User.css'
// function Userapi(){
//    const [data,setData]=useState([]);
//    useEffect(()=>{
//   fetch("https://api.github.com/users").then((result)=>{
//       result.json().then((response)=>{
//   console.log("result",response)
//   setData(response);
//    });
//   });
//  },[]);
//  console.log(data);
//   return(
   
//      <table className="table">
         
//    <tr className="border">
//   <th>login</th>
//    <th>id</th>
//  <th>node</th>
        
//   </tr>
//   {
//    data.map((item)=>(
//   <tr className="border">
//   <td >{item.login}</td>
//   <td>{item.id}</td>
//  <td>{item.node_id}</td>
        
//    </tr>
//        )
//    )
//   }
//   </table> 
  
//   );
//  }
//  export default Userapi;




// import React,{useState} from "react";

// function Userapi(){
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [mobile,setMobile]=useState("")
//     function saveUser(){
//         console.log({name,email,mobile});
//         let data =(name,email,mobile)
//         fetch("http://localhost:4000/todo",{
//         method:'POST',
//         headers:{
//             'Accept':'application/josn',
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(data)
//         }).then((result)=>{
//         result.json().then((resp)=>{
//             console.log("resp,resp")
//         })
//         })
//     }
   

// return(
    
//     <div className="User">
//     <h1>POST API EXAMPL</h1>
//     <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br></br> <br></br>
//     <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br></br> <br></br>
//     <input type='text' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br></br> <br></br>
//     <button type="button" onClick={saveUser}>Save New User</button>

//     </div>
// );
// }
// export default Userapi;








import React, {useEffect,useState} from "react";
 import './User.css'
function Userapi(){
   const [data,setData]=useState([]);
   useEffect(()=>{
     getlist();
  
 },[]);
 console.log(data);
 function getlist(){ 
 fetch("https://api.github.com/users").then((result)=>{
  result.json().then((response)=>{
console.log("result",response)
setData(response);
});
});
 }

 function deleteUser(id){
  fetch('https://api.github.com/users(id)',{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      getlist();
    })
  })
 }
  return(
   
     <table className="table">
         
   <tr className="border">
  <th>login</th>
   <th>id</th>
 <th>node</th>
 <th>Delet</th>
        
  </tr>
  {
   data.map((item)=>(
  <tr className="border">
  <td >{item.login}</td>
  <td>{item.id}</td>
 <td>{item.node_id}</td>
 <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
        
   </tr>
       )
   )
  }
  </table> 
  
  );
 }
 export default Userapi;



