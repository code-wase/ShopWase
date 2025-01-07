import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [login,setLogin]= useState({
        username: "",
        age:'',
        email:'',
        grade:''
    });
    const [loding,setLoading] =useState(true)
    let navigate = useNavigate()
    const handlechange=(e)=>{
        setLogin({...login,
            [e.target.name]:e.target.value
        })
    }
    let submitHandler= async(e)=>{
         e.preventDefault()
         setLoading(true)

         try {
            await axios.post(`${BaseUrl}/create`,login)
            setTimeout(() => {
                navigate("/");
              }, 1500);
         } catch (error) {
            console.log(error);
            setLoading(false)
         }
    }

  return (
    <>
    
<div class="">
  <section class="rounded-md p-2 bg-white">
    <div class="flex items-center justify-center my-3">
      <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <form class="mt-5" onSubmit={submitHandler}>
          <div class="space-y-4">
            <div>
              <label class="text-base font-medium text-gray-900">
                User Name
              </label>
              <div class="mt-2">
                <input onChange={handlechange}
                  placeholder="Full Name"
                  type="text"
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="user_name"
                />
              </div>
            </div>
            <div>
              <label class="text-base font-medium text-gray-900">
                Email address
              </label>
              <div class="mt-2">
                <input onCanPlay={handlechange}
                  placeholder="Email"
                  type="email"
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="email"
                />
              </div>
            </div>

            <div>
              <label class="text-base font-medium text-gray-900">
                Age
              </label>
              <div class="mt-2">
                <input onChange={handlechange}
                  placeholder="Age"
                  type="number"
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="age"
                />
              </div>
            </div>

            <div>
              <label class="text-base font-medium text-gray-900">
                Grade 
              </label>
              <div class="mt-2">
                <input onChange={handlechange}
                  placeholder="Grade"
                  type="text"
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="Grade"
                />
              </div>
            </div>

            <div>
              <button
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="button"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Login