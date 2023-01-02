import React, { useEffect, useCallback, useRef } from 'react'
import './App.css'
import TranscriptDetails from '../TranscriptDetails'
import NavBar from './NavBar'

export default function App() {

  // handle keyboard shortcuts
  // abstract event listener to a custom hook in a sepparate file
  // include a config file for default shortcuts

  // typescript
  type navBarRefType = React.ElementRef<typeof NavBar>;
  const queryRef = useRef<navBarRefType>(null);

  // DEFINE keyboard shortcuts
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === '.') queryRef.current?.enterSearch();
    if (event.key === '/') queryRef.current?.enterCommand();
  }, []);

  // LISTEN for ALL key presses
  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);


  // todo: replace below with the router
  return (
    <div className="container mx-auto">
      <NavBar ref={queryRef} />
      {/* <TranscriptDetails /> */}
    </div>
  )
}