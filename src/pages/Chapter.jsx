import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { curriculum, rdCases } from '../data/curriculum';
import { ArrowLeft, ChevronRight, Zap, Target, AlertCircle } from 'lucide-react';

const Chapter = () => {
  const { id } = useParams();
  const chapter = curriculum.find(c => c.id === parseInt(id));
  const cases = rdCases[parseInt(id)] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!chapter) return <div className="container" style={{ padding: '10rem 0' }}>Chapter not found</div>;

  const nextChapter = curriculum.find(c => c.id === chapter.id + 1);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none', marginBottom: '2rem' }}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <header style={{ marginBottom: '4rem' }}>
          <div style={{ color: '#6366f1', fontWeight: 600, marginBottom: '1rem' }}>Chapter {chapter.id}</div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{chapter.title}</h1>
          <p style={{ fontSize: '1.4rem', color: '#94a3b8', lineHeight: 1.6 }}>{chapter.subtitle}</p>
        </header>

        <div className="glass-card" style={{ padding: '3.5rem', marginBottom: '6rem', background: 'rgba(255,255,255,0.02)' }}>
          <div className="markdown-content">
            <ReactMarkdown>{chapter.content}</ReactMarkdown>
          </div>
        </div>

        {cases.length > 0 && (
          <section style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
              🚀 <span className="gradient-text">R&D 실전 마스터링 (Presentation)</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {cases.map((item, index) => (
                <div key={index} className="case-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'var(--primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>CASE 0{index + 1}</div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>{item.category}</h3>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    {/* Before Card */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                          <AlertCircle size={16} /> GENERAL PROMPT
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2rem' }}>"{item.before}"</p>
                      </div>
                      
                      {/* Before Result Preview */}
                      <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', marginTop: 'auto' }}>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Output (General)</div>
                        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.5 }}>{item.beforeResult}</p>
                      </div>
                    </div>

                    {/* After Card */}
                    <div style={{ background: 'rgba(99, 102, 241, 0.05)', border: '1px solid var(--primary)', borderRadius: '16px', padding: '2rem', boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 800 }}>
                          <Zap size={16} fill="var(--primary)" /> MASTER PROMPT
                        </div>
                        <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6, marginBottom: '2rem' }}>{item.after}</p>
                      </div>

                      {/* After Result Preview */}
                      <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.75rem', color: '#818cf8', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Output (Master)</div>
                        <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.5 }}>{item.afterResult}</p>
                      </div>
                      
                      <div style={{ borderTop: '1px solid rgba(99, 102, 241, 0.2)', paddingTop: '1.2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#06b6d4', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 700 }}>
                          <Target size={14} /> SUCCESS POINT
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.4 }}>{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {nextChapter && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={`/chapter/${nextChapter.id}`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'white', padding: '1.5rem 2rem', borderRadius: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Next Chapter</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{nextChapter.title}</div>
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

