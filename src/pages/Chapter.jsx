import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { curriculum } from '../data/curriculum';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const Chapter = () => {
  const { id } = useParams();
  const chapter = curriculum.find(c => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!chapter) return <div className="container" style={{ padding: '10rem 0' }}>Chapter not found</div>;

  const nextChapter = curriculum.find(c => c.id === chapter.id + 1);

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none', marginBottom: '2rem' }}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <header style={{ marginBottom: '4rem' }}>
          <div style={{ color: '#6366f1', fontWeight: 600, marginBottom: '1rem' }}>Chapter {chapter.id}</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{chapter.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>{chapter.subtitle}</p>
        </header>

        <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem', background: 'rgba(255,255,255,0.02)' }}>
          <div className="markdown-content">
            <ReactMarkdown>{chapter.content}</ReactMarkdown>
          </div>
        </div>

        {nextChapter && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8rem' }}>
            <Link to={`/chapter/${nextChapter.id}`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'white', padding: '1.5rem 2rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Next Chapter</div>
                <div style={{ fontWeight: 700 }}>{nextChapter.title}</div>
              </div>
              <ChevronRight size={24} color="#6366f1" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .markdown-content h2 { margin: 2.5rem 0 1.5rem; font-size: 1.8rem; color: #6366f1; }
        .markdown-content h3 { margin: 2rem 0 1rem; font-size: 1.4rem; color: #06b6d4; }
        .markdown-content p { margin-bottom: 1.5rem; color: #cbd5e1; line-height: 1.8; }
        .markdown-content strong { color: #fff; }
      `}</style>
    </div>
  );
};

export default Chapter;
