import { useEffect, useState } from "react";

export default function UserForm() {
  const initialValue = { username: '', email: '', psw: '', confirmpsw: '' };
  const [formValues, setformValue] = useState(initialValue);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setisSubmit(true);
  }

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      }
    },[formErrors]);

   const validate = (values)=>{
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.username){
      errors.username = "username is required!"
    }
    if(!values.email){
      errors.email = "email is required!"
    } else if (!regex.test(values.email)){
      errors.email = "This is not valid email"
    }
    if(!values.psw){
      errors.psw = "password is required!"
    }
    if(values.confirmpsw != values.psw){
      errors.confirmpsw = "password should be matched as above!"
    }
    return errors

   }

  return (
    <>
      <div className="flex flex-col justify-center align-middle border rounded border-gray-400 text-center mx-auto py-20 mt-40 w-72 h-96 bg-[url('')]" >
        <h1 className='text-center text-gray-200'><span className=''>Sign Up</span></h1>
        <form className=' flex justify-center px-6 py-8 text-black ' onSubmit={handleSubmit}>
          <div>
            <div>
              <input className='outline-none border-black m-2 bg-black rounded text-gray-500 ' name="username" onChange={handleChange} type="text"  placeholder='Name' value={formValues.username} />
              <p className="text-red-600">{formErrors.username}</p>
            </div>
            <div>
              <input className='outline-none text-border border-black m-2 bg-black rounded text-gray-500 ' name="email" onChange={handleChange} type="text"  placeholder='E-mail' value={formValues.email} />
            </div>
            <p className="text-red-600">{formErrors.email}</p>
            <div>
              <input className='outline-none border border-black m-2 bg-black rounded text-gray-500 ' name="psw" onChange={handleChange} type="text"  placeholder='Password' value={formValues.psw} />
            </div>
            <p className="text-red-600">{formErrors.psw}</p>
            <div>
              <input className='outline-none border border-black m-2 bg-black rounded text-gray-500 ' name="confirmpsw" onChange={handleChange} type=""  placeholder='Confirm Password' value={formValues.confirmpsw} />
            </div>
            <p className="text-red-600">{formErrors.confirmpsw}</p>
            <button className=' bg-zinc-800 text-gray-500 border border-black rounded-full px-3 mt-2'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )

}

