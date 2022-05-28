import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        My Library
      </h1>
      <nav>
        <Link to="/about">
          درباره ی ما
        </Link>

        <Link to="/books">
          کتاب ها
        </Link>

      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
