import React from 'react'

const Error = ({title,message}) => {
  return (
    <>
    {/* <div className={classes.backdrop}  onClick={props.onConfirm} /> */}
      <div className="contener">
      <h2>{title}</h2>
       <p>{message}</p>
       {/* {console.log("Error message",message)} */}
       <p>Enter the Valid Data</p>
        <button>Okay</button>
      </div>
    </>
  )
}

export default Error
