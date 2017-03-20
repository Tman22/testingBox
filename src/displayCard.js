import React, { Component } from 'react';

export const DisplayCard = (props) => {

  return (
    <div className='displayCard'>
      <h1>{props.title}</h1>
      <h3>{props.body}</h3>
    </div>
  )
}
