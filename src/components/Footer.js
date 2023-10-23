import React from 'react'

export default function Footer() {
  const mystyle = {
    height: "54px",
    fontSize: "18px",
    backgroundColor: "#2b3035",
    color: "white",
    padding: "11px 0px"
  }
  return (
    <div className="footer text-center" style={mystyle}>
      Copyright &copy; www.myTodoList.com | All rights reserved
    </div>
  )
}
