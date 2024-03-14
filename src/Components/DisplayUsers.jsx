import React from 'react'
import { useSelector  , useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { deleteUser } from '../Store/slices/UserSlice';
import "./Global.css";


const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) =>{
        return state.Users;
    })
    const deleteData = (id) =>{
        dispatch(deleteUser(id))
        
    }
  
  return (
    <div>
        {data.map((items , index) =>{
            return <li key={index}> { items} <MdDelete onClick={() => deleteData(index)} /> </li>

        })}
    </div>
  )
}

export default DisplayUsers