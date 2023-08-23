import React, { useContext, useEffect } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate=useNavigate();
  const{studNum,teachNum,getStudentsNum,getTeachersNum}=useContext(AppContext);
 
  console.log(studNum,teachNum)
  useEffect(()=>{
    getStudentsNum()
    getTeachersNum()
  },[])
  return (
    <>
     
      {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    <div className="card-body p-md-4">
                      <h3 className="mb-4 text-uppercase" style={{color:"#4e73df",'fontWeight':'bolder','textAlign':'center'}}>DASHBOARD</h3>
                    </div>

                  <div className="row">
                    <div className="col-sm-6 mb-4" >
                      <div className="card border-primary text-center">
                      <img class="card-img-top" src="https://img.freepik.com/free-vector/group-students-school-illustrated_52683-43232.jpg" alt="Student" height={'250vh'}/>
                        <div className="card-body text-primary">
                          <h5 className="card-title  fw-bold fs-3">Students</h5>
                          <p className="card-text">Total number Of Students : {studNum}</p>
                          <button className='btn btn-primary ' onClick={()=>{
                          navigate(`/Student/ViewStudents`)
                        }}>
                          View Students
                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <div className="card border-primary text-center">
                      <img class="card-img-top" src="https://img.freepik.com/premium-vector/hand-drawn-cartoon-teacher-teaching-classroom-background_40876-3054.jpg?w=360" alt="Teacher" height={'250vh'}/>
                      
                        <div className="card-body text-primary">
                          <h5 className="card-title fw-bold fs-3">Teachers</h5>
                          <p className="card-text">Total number Of Students : {teachNum}</p>
                          <button className='btn btn-primary' onClick={()=>{
                          navigate(`/Teacher/ViewTeachers`)
                        }}>
                          View Teachers
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
        
                           
     </div>
    </>
  )
}

export default Dashboard