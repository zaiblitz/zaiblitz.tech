import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="md-admin-sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/players">Player</Link></li>
        <li><Link to="/game-api">Game API</Link></li>
        <li><Link to="/system-features">System Feature</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;