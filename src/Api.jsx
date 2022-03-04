
import React, { useState } from "react";
import Table  from 'react-bootstrap/Table';
function Api(){
    const [data,setData]=useState([])
async function search(key){
    let result =  fetch("https://api.github.com/users"+key)
    result =  result.json();
    console.log(result)
    setData(result)
}
return(
    <div>
      <div className="col-sm-6 offset-sm-3">
      <input type='text' onChange={(e)=>search(e.target.value)} className="form-control"/>
      {
          <Table>
            <tr>
             <th>no.</th>
             <th>Name</th> 
             <th>Name</th>
             <th>Name</th>
             <th>Name</th>
             <th>Name</th>
               

            </tr> 
            {
                data.map((item)=>(
                <tr>
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                  <td>{item.id}</td>  
                </tr>)
                )
            } 
          </Table>
      }

      </div>  
    </div>
)
}
export default Api;