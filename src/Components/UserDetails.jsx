import React from 'react'
import { fakeUserData } from '../Api/Api'
import {  useDispatch } from 'react-redux'
import { addUser } from '../Store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'
import DeleteAll from './DeleteAll'
import "./Global.css";

const UserDetails = () => {
    const dispatch = useDispatch();
    const addNewUser = (name) =>{
        dispatch(addUser(name));
        
    }
  return (
    <div className='main-div'>
        <h2 >LIST OF USERS DETAILS</h2>
        <button onClick={() => addNewUser(fakeUserData())}>add Users</button>
        <div>
           <DisplayUsers />
        </div>
        <div><DeleteAll /></div>
    </div>
  )
}

export default UserDetails