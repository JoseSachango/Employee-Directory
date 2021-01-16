import React from "react";




function EmployeeData (props){
    return (
        //console.log("This is the props that was passed from mainpage:",props)
        
       
        <div className="container mt-5 ">

            <div className="row mb-3 border-top border-bottom pb-3">
                <div className="col-sm font-weight-bold">
                    Image
                </div>
                <div className="col-sm font-weight-bold">
                    Name
                    <button className="btn btn-link carrot" onClick={props.sortByName}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill pt-0 pb-0 carrot" viewBox="0 0 16 16">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>

                    </button>
                                    
                </div>
                <div className="col-sm font-weight-bold">
                    Phone
                </div>
                <div className="col-sm font-weight-bold">
                    Email
                </div>
                <div className="col-sm font-weight-bold">
                    DOB
                </div>
            </div>

            {

            




                props.data.map(employee=>(
                  

                  <div className="row mb-3 border-bottom pb-3 " key={employee.email}>
                      <div className="col-sm font-weight-bold">
                          <img src={employee.picture.thumbnail} alt={employee.name.first} width="50" height="50" />
                      </div>
                      <div className="col-sm font-weight-bold">
                          <p>{employee.name.first} {employee.name.last}</p>
                      
                      </div>
                      <div className="col-sm font-weight-bold">
                         <p>
                          {employee.phone}
                         </p> 
                      </div>
                      <div className="col-sm font-weight-bold">
                          <p>{employee.email}</p>
                      </div>
                      <div className="col-sm font-weight-bold">
                          <p>
                              {employee.dob.date}
                          </p>
                      </div>
                  </div>


              ))
            }

            
            {console.log(props.data)}
            

            

            
        </div>
        
    )
}



export default EmployeeData;
