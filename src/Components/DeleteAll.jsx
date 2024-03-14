import React from 'react'
import { deleteAllUser } from '../Store/slices/UserSlice';
import {  useDispatch } from 'react-redux';
const DeleteAll = () => {
    const dispacth = useDispatch();
    const clearAll = () =>{
        dispacth(deleteAllUser());
    }
  return (
    <div>
        <button onClick={() => clearAll()}>Clear All</button>
    </div>
  )
}

export default DeleteAll