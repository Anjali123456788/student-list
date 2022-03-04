import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Searchbar from './Searchbar';



function Student() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://iteg-management-server.herokuapp.com/student").then((result) => {
      result.json().then((response) => {
        console.log("result", response)
        setData(response);
      });
    });
  }, []);
  console.log("data", data);



  return (
    <>
      <Searchbar />
      <br></br>
      <br></br>
      <div>
        <table id="tb" className="table table-borderrd table-striped mb-0  containear-sm table-wrapper-scroll-y my-custom-scrollbar">
          <thead>
            <tr className="border">
              <th>no.</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th >Email</th>
              <th>Address</th>
              <th >Enrool</th>
              <th >Level</th>
              <th >Action</th>

            </tr>
          </thead>
          {
            data.map((item) => (

              <tr className="border1" >
                <td >{item._id}</td>
                <td>{item.Name}</td>
                <td>{item.Father_Name}</td>
                <td>{item.Email}</td>
                <td>{item.Address}</td>
                <td>{item.Enroll}</td>
                <td>{item.Level}</td>
                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} id="icon" /></Link><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faTrash} id="ic" /></Link></td>
                {/* <td></td> */}




              </tr>


            )
            )
          }

        </table>
      </div>
    </>


  );
}

export default Student;

