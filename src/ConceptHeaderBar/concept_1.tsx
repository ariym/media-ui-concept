import './App.css'
import TranscriptDetails from './TranscriptDetails'

export default function App() {

  return (
    <div className="App">


      <div className="TopBar">

      <div>
      <label>Library: </label>
      {/*
        - Libraries provide a way to sepparate content that is completely unrelated (like tutorials from entertainment)
        - Comparable to workspaces
      */}
      <select>
        {/* Include icons to defferntiate between local, and remote */}
        <option>Podcasts (Home PC)</option>
        <option>iPhone Library (local)</option>
        <option>Programming (Home PC)</option>
      </select>
      </div>

      </div>

      <label>Functions</label>
      {/* Libraries provide a way to sepparate content that is completely unrelated (like tutorials from entertainment) */}
      <select>
        {/* Include icons to defferntiate between tagging, and playlist creation, or other */}
        <option>Transcribe Audio/Video</option>
        <option>iPhone Library (local)</option>
        <option>Programming (Home PC)</option>
      </select>

      <button onClick={() => alert("popup with options for submitting via 1) url, 2) local filesystem, 3) 3rd party cloud (g drive, dropbox, nextcloud), 4) ftp/fileserver")}>Add Content</button>
<input placeholder="search library or this page..." />

      <TranscriptDetails />
    </div>
  )
}
