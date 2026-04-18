import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: 800, fontSize: '1.2rem' }}>
          <Sparkles size={24} color="#6366f1" />
          <span>PROMPT MASTER</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#curriculum">Curriculum</a>
          <a href="https://github.com/heekeunlee/prompt" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
