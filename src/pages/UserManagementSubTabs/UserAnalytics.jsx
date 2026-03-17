import React, { useContext, useEffect } from 'react'
import { titleIs } from '../../context/TitleContext';

const UserAnalytics = () => {
  const { setTitle } = useContext(titleIs);
    useEffect(() => {
      setTitle("User Analytics");
    }, []);

  return (
    <div>UserAnalytics</div>
  )
}

export default UserAnalytics;