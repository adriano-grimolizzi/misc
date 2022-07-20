import { Outlet, Link } from "react-router-dom"

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hogwarts</h1>
        <nav>
          <Link to="/wizard-list">Wizard List</Link> | {" "}
          <Link to="/create-wizard">Create Wizard</Link>
        </nav>
        <br />
        <Outlet />
      </header>
    </div>
  )
}

export default App;
