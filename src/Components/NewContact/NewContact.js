import React from 'react';
import { useSelector } from 'react-redux';

const NewContact = () => {
    const {firstname}=useSelector(state=>state.userslice)
  return (
    <div>NewContact-{firstname}</div>
  )
}

export default NewContact