import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Teacher() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users").then((result) => {
      result.json().then((response) => {
        console.log("result", response)
        setData(response);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <table id="tb" className="table table-borderrd table-striped mb-0  containear-sm table-wrapper-scroll-y my-custom-scrollbar">
      <thead>
          <tr id="border" >
            <th >no.</th>
            <th>Name</th>
            <th >Email</th>
            <th >Contect</th>
            <th >Address</th>
            <th >Post</th>
            <th >Action</th>


          </tr>
          </thead>
          
          {
            data.map((item) => (
              <tr className="border1">
                <td >{item.id}</td>
                <td>{item.login}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td ><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} id="icon"></FontAwesomeIcon></Link><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faTrash} id="icon"></FontAwesomeIcon></Link></td>



              </tr>
            )
            )
          }
          
        </table>
      </div>
    </>
  );
}
export default Teacher;

