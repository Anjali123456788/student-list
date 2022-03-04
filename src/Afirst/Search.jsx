import React,{Afirst} from "react";

class Search extends Afirst{
    constructor(){
        super()
        this.state={
            searchData:null
        }
    }
   search(key){
       console.log(key)
       fetch('http://localhost:3000/restaurant?q='+key).then((data)=>{
           data.json().then((resp)=>{
               console.log("resp",resp)
               this.setState({search:resp})
           })
       })
   }
    render(){
        return(
            <div>
            {/* <form  id='fo' class="d-flex ">
    
    <input id='in' class="form-control me-2 " type="search" placeholder="Search Teacher..." aria-label="Search"  onChange={(event)=>this.search(event.target.value)} />
    <div>
        {
         this.state.searchData?
         <div>
         {
this.state.searchData.map()
         }
         </div>  
        </div>
        }
    <button id='bu' class="btn btn-outline-primary " type="submit">Search</button>

  </form> */}
  
            </div>
        )
    }
}
export default  Search;
