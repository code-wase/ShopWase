import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../common/BaseUrl'
import Loader from './Loader'

const Datafetch = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData= async ()=>{
        try {
            let response= await axios.get(`${BaseUrl}/getAllStudents`)
            setStudents(response.data),
            setLoading(false)
            console.log(response.data);
        }catch(e){
            console.log(e);
            setLoading(true)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <div className='h-[90vh] w-[80vw] mx-80 my-10 px-15 py-1 text-center'>

    {loading ? (<Loader/>):
    (
        <table class="table" className='bg-cyan-950 text-white rounded-xl w-[55vw]'>
        <thead>
          <tr>
            <th className='size-5 border-b-2' scope="col">Name</th>
            <th className='size-5 border-b-2'  scope="col">Email</th>
            <th className='size-5 border-b-2'  scope="col">Age</th>
            <th className='size-5 border-b-2' scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student)=>{
              return (
                  <>
                      <tr key={student._id}>
                          <td className='p-5'>{student.name}</td>
                          <td className='p-3'>{student.email}</td>
                          <td className='p-3'>{student.age}</td>
                          <td className='p-3'>{student.grade}</td>
                      </tr>            
                  </>
              )
            })}
          
        </tbody>
      </table>
    )
}
    
           
</div>

    </>
  )
}

export default Datafetch