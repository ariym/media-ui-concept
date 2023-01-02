import React, { useEffect, useCallback, useRef } from 'react'
import './App.css'
import BetterNav from './BetterNav'


export default function App() {

  // todo: replace below with the router
  return (
    <div className="container mx-auto">
      
      <BetterNav />

      <p>this is the page part that is auto filled in</p>

    </div>
  )
}