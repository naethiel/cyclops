import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signals from "signals";
import Reports from "reports";
import DataIngestion from "data-ingestion";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link style={{ marginRight: 8 }} to="/signals">
            signals
          </Link>
          <Link style={{ marginRight: 8 }} to="/reports">
            reports
          </Link>
          <Link style={{ marginRight: 8 }} to="/data-ingestion">
            data-ingestion
          </Link>
        </nav>
        <Route path="/signals">
          <Signals />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
        <Route path="/data-ingestion">
          <DataIngestion />
        </Route>
      </Router>
    </div>
  );
}

export default App;
