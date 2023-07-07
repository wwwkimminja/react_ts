import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { users } from '../db'

export default function User() {
  const {userId}=useParams()
  return (
    <div>
    <h1>
      User with id {userId} is named: {users[Number(userId) - 1].name}
    </h1>
    <hr />
    <Link to="followers">See followers</Link>
    <Outlet />
  </div>
  )
}
