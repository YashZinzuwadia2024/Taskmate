import React from 'react'
import Pic  from '../assets/logo.jpg'
import './Header.css'

export const Header = () => {
  return (
    <div className="header">
        <img src={Pic} alt="" />
        <h2>Taskmate</h2>
    </div>
  )
}
