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
        .markdown-content h2 { margin: 3.5rem 0 2rem; font-size: 2.8rem; color: #6366f1; border-bottom: 2px solid rgba(99, 102, 241, 0.3); padding-bottom: 1rem; }
        .markdown-content h3 { margin: 3rem 0 1.5rem; font-size: 2rem; color: #06b6d4; }
        .markdown-content p { margin-bottom: 2.5rem; color: #e2e8f0; line-height: 1.9; font-size: 1.4rem; word-break: keep-all; overflow-wrap: break-word; }
        .markdown-content strong { color: #fff; font-weight: 800; background: rgba(99, 102, 241, 0.2); padding: 0.2rem 0.5rem; border-radius: 4px; }
        .markdown-content blockquote { border-left: 6px solid var(--primary); padding: 1.5rem 2rem; margin: 3rem 0; background: rgba(255, 255, 255, 0.03); border-radius: 0 12px 12px 0; font-size: 1.3rem; }
        @media (max-width: 768px) {
          .markdown-content h2 { font-size: 2rem; }
          .markdown-content h3 { font-size: 1.6rem; }
          .markdown-content p { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default Chapter;
