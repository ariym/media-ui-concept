import "./App.css";
import "./bootstrap4.min.css";

export default function BetterNav() {
  return (
    <nav className="flex navbar-light bg-light">

      <a className="flex-none navbar-brand">oClip</a>

      <div className="grow input-group input-group-sm">
        <input className="flex-grow form-control" type="search" placeholder="Search" aria-label="Search" />

        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </div>
      </div>

      <button className="flex-none btn btn-primary">Browse</button>

    </nav>
  );
}