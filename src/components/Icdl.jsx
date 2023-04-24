import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , deleteUser } from '../redux/slices/IcdlSlice';

const Icdl = () => {

  const [name , setName] = useState("");
  const [phone , setPhone] = useState();
  const [course , setCourse] = useState();

  const icdlUsers = useSelector((state) => state.icdl.users);
  const dispatch = useDispatch();

  
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='no-replay'>
        <h1>Icdl</h1>
        <form onSubmit={handleSubmit}>
  <input type="text" value={name}  placeholder='Enter name' onChange = {(e) =>setName(e.target.value)} />
  <input type="text" value={phone} placeholder='Enter Phone Number'onChange = {(e) =>setPhone(e.target.value)}  />
  <input type="text" value={course} placeholder='Enter Course' onChange = {(e) =>setCourse(e.target.value)}  />
  <button className='add'
  onClick={() =>{dispatch(addUser({id :icdlUsers.length + 1 ,name : name , phone : phone , course : course}))
    setName("");
    setCourse("");
    setPhone("")
    }}
  >Add User</button>
 </form>
{icdlUsers.length > 0 ?  <table border = '2' cellPadding = '10'>
  <tr>
      <th>id</th>
      <th>name</th>
      <th>Phone Number</th>
      <th>Course</th>
      <th >Controls</th>
      
  </tr>
 {icdlUsers.length > 0 &&  icdlUsers.map((user) =>{
 return (
  <tr key={user.id}>

  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.phone}</td>
  <td>{user.course}</td>
  <td>
    <button className='delete'
    onClick={() =>dispatch(deleteUser(user.id))}
    >Delete</button>
     <button className='details'
    >Details</button>
  </td>
  </tr>
 )
   })}
  
</table> : <h2 className='no-users'>No There Users , Please Enter Users in Table.</h2>}

    </div>
  )
}

export default Icdl