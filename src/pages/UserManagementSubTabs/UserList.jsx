import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/TitleContext';

const UserList = () => {

  const {setTitle} = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "User List"]);
  }, []);

  const boxes = Array.from({ length: 3 });

  return (
    <div className=''>

      

    </div >
  )
}

export default UserList; 