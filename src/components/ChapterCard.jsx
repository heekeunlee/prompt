import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle } from 'lucide-react';

const ChapterCard = ({ chapter }) => {
  return (
    <div className="glass-card">
      <div style={{ color: '#6366f1', marginBottom: '1.5rem' }}>
        <BookOpen size={32} />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{chapter.title}</h3>
      <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontWeight: 600 }}>{chapter.subtitle}</h4>
      <p style={{ color: '#94a3b8', marginBottom: '1.5rem', minHeight: '80px' }}>{chapter.description}</p>
      
      <div style={{ marginBottom: '2rem' }}>
        {chapter.topics.map((topic, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <CheckCircle size={14} color="#10b981" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
      
      <Link to={`/chapter/${chapter.id}`} className="primary-button" style={{ width: '100%', justifyContent: 'center' }}>
        강의 보기
      </Link>
    </div>
  );
};

export default ChapterCard;
