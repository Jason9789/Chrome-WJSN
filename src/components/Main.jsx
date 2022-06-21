import React, { useEffect, useState } from 'react'
import User from './User'
import Weather from './Weather'

const Main = () => {
  return (
    <div>
      <Weather />
      <User />
    </div>
  )
}

export default Main
