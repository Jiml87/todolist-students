import React from 'react'
import MyButton from '../components/Button';
import MyInput from '../components/Input';

const Header = (props) => {

  return <div style={{display: 'flex'}}>
      <div style={{maxWidth: 400}}><MyInput /></div>
      <MyButton />
    </div>
}

export default Header;
