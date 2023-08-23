import { createContext, useState } from "react";
import axios from "axios";

let AppContext = createContext();

export const AppProvider = ({ children }) => {
    const[student,setStudent]=useState('');
    const[teacher,setTeacher]=useState('');
    const[studNum,setStudNum]=useState('');
    const[teachNum,setTeachNum]=useState('');
    const[studentList,setStudentList]=useState([]);
    const[name,setName]=useState('');
    const[age,setAge]=useState('')
    const[address,setAddress]=useState('');
    const[teach,setTeach]=useState([]);
    const[teachername,setTeachername]=useState('')
    const[contact,setContact]=useState('');
    const[section,setSection]=useState('');
    const[subject,setSubject]=useState('');
    const[salary,setSalary]=useState('')
    const[msg,setMsg]=useState('');
    const[errormsg,setErrormsg]=useState('');

    //To get all teachers List
    const getTeachers =async() =>{
      await axios.get(`https://64e32cc9bac46e480e7852ab.mockapi.io/Teachers`)
      .then(response => setTeach(response.data))
    };
    
    //To get all students List
    const getStudents=async()=>{
      await axios.get(`https://64e32cc9bac46e480e7852ab.mockapi.io/Students`)
      .then(response=>setStudentList(response.data))
    };

    //To get no. of. teachers
      const getTeachersNum =async() =>{
      await axios.get(`https://64e32cc9bac46e480e7852ab.mockapi.io/Teachers`)
      .then(response => setTeachNum(response.data.length))
    };

    //To get no. of. teachers
      const getStudentsNum =async() =>{
      await axios.get(`https://64e32cc9bac46e480e7852ab.mockapi.io/Students`)
      .then(response => setStudNum(response.data.length))
    };

  return (
    <AppContext.Provider
      value={{ 
        student,setStudent,
        studentList,setStudentList,
        teacher,setTeacher,
        name,setName,
        address,setAddress,
        age,setAge,
        teach,setTeach,
        contact,setContact,
        section,setSection,
        subject,setSubject,
        salary,setSalary,
        teachername,setTeachername,
        msg,setMsg,
        errormsg,setErrormsg,
        getTeachers,
        getStudents,
        studNum,teachNum,
        getStudentsNum,getTeachersNum
     }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;