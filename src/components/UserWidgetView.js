import React from 'react'

const UserWidgetView = ({ username, location, weather }) => {
  return (
    <div>
      <h1>{username}</h1>
      <p>{location}</p>
      <p>{weather}</p>
    </div>
  )
}

export default UserWidgetView
