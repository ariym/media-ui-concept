import './App.css'

export default function App() {

  return (
    <div className="App">


      <h1>Transcript Details</h1>

      <div className="grid grid-cols-1">
      <h3>Sources</h3>
      <button>Add new source column</button>
      <div>
      <label>YouTube</label> <input placeholder="URL" />
      </div>
      <div>
      <label>Vimeo</label> <input placeholder="URL" />
      </div>
      <div>
      <label>Google Drive</label> <input placeholder="URL" />
      </div>
      <div>
      <label>Custom</label> <input placeholder="URL" />
      </div>

      </div>

    </div>
  )
}
