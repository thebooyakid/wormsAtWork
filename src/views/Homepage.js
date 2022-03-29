import React from 'react'

export default function Homepage() {
    const style3 = {
        position: 'absolute',
        marginTop: '5%',
        color: 'teal',
        marginLeft: '10%',
        textAlign: 'center',
        fontSize: '75px'
      };
  return (
    <div>
        <h1 style={style3}>Welcome to Worms at Work</h1>
        <img width = '100%' height='auto' src= 'https://res.cloudinary.com/dri3mditc/image/upload/v1648492233/watercolor_itlskl.jpg'></img>
    </div>
  )
}