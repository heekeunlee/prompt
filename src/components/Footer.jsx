import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          &copy; 2026 Prompt Master Class. Built with AI for Humans.
        </p>
        <p style={{ color: '#6366f1', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Designed for high-impact AI communication.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
