import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { curriculum, rdCases } from '../data/curriculum';
import { ArrowLeft, ChevronRight, Zap, Target, AlertCircle, Info } from 'lucide-react';

const PromptRenderer = ({ text, isMaster }) => {
  if (!isMaster) return <p style={{ color: isMaster ? '#fff' : '#cbd5e1', fontSize: '1.2rem', fontStyle: isMaster ? 'normal' : 'italic', lineHeight: 1.8, textAlign: isMaster ? 'left' : 'center' }}>"{text}"</p>;

  // Parse [text:annotation]
  const parts = text.split(/(\[.*?:.*?\])/g);
  return (
    <div style={{ color: '#fff', fontSize: '1.15rem', lineHeight: 2.2, wordBreak: 'keep-all' }}>
      {parts.map((part, i) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          const [match, content, note] = part.match(/\[(.*?):(.*?)\]/);
          return (
            <span key={i} style={{ position: 'relative', display: 'inline', margin: '0 2px' }}>
              <span style={{ borderBottom: '2px dashed #6366f1', color: '#818cf8', fontWeight: 700, cursor: 'help', padding: '0 2px' }}>
                {content}
              </span>
              <span className="tooltip-note" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem', lineHeight: 1.4, fontWeight: 500, paddingLeft: '0.5rem', borderLeft: '2px solid rgba(99, 102, 241, 0.3)' }}>
                * {note}
              </span>
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};

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
      <div className="container" style={{ maxWidth: '1100px' }}>
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
              🚀 <span className="gradient-text">R&D 실전 마스터링 (Case Presentation)</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
              {cases.map((item, index) => (
                <div key={index} className="case-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 800 }}>CASE 0{index + 1}</div>
                    <h3 style={{ fontSize: '1.7rem', color: '#fff', fontWeight: 700 }}>{item.category}</h3>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '2rem' }}>
                    {/* Before Card */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '200px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>
                          <AlertCircle size={14} /> General Prompt
                        </div>
                        <PromptRenderer text={item.before} isMaster={false} />
                      </div>
                      
                      <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
                        <div style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>AI Output (General)</div>
                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>{item.beforeResult}</p>
                      </div>
                    </div>

                    {/* After Card */}
                    <div style={{ background: 'rgba(99, 102, 241, 0.03)', border: '1px solid rgba(99, 102, 241, 0.4)', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
                          <Zap size={14} fill="var(--primary)" /> Master Prompt (Annotated)
                        </div>
                        <PromptRenderer text={item.after} isMaster={true} />
                      </div>

                      <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '16px', padding: '1.8rem', margin: '2rem 0' }}>
                        <div style={{ fontSize: '0.75rem', color: '#818cf8', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 800 }}>AI Output (Advanced)</div>
                        <p style={{ color: '#fff', fontSize: '1.05rem', lineHeight: 1.7 }}>{item.afterResult}</p>
                      </div>
                      
                      <div style={{ borderTop: '1px solid rgba(99, 102, 241, 0.1)', paddingTop: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#06b6d4', marginBottom: '0.6rem', fontSize: '0.95rem', fontWeight: 800 }}>
                          <Target size={16} /> SUCCESS INSIGHT
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {nextChapter && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
            <Link to={`/chapter/${nextChapter.id}`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'white', padding: '2rem 2.5rem', borderRadius: '24px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Next Masterclass</div>
                <div style={{ fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>{nextChapter.title}</div>
              </div>
              <ChevronRight size={32} color="#6366f1" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .markdown-content h2 { margin: 4rem 0 2.5rem; font-size: 3rem; color: #6366f1; border-bottom: 2px solid rgba(99, 102, 241, 0.3); padding-bottom: 1rem; letter-spacing: -0.02em; }
        .markdown-content h3 { margin: 3.5rem 0 1.5rem; font-size: 2.2rem; color: #06b6d4; }
        .markdown-content p { margin-bottom: 3rem; color: #e2e8f0; line-height: 2.2; font-size: 1.5rem; word-break: keep-all; overflow-wrap: break-word; }
        .markdown-content strong { color: #fff; font-weight: 800; background: rgba(99, 102, 241, 0.2); padding: 0.2rem 0.6rem; border-radius: 6px; }
        .markdown-content blockquote { border-left: 8px solid var(--primary); padding: 2rem 2.5rem; margin: 4rem 0; background: rgba(255, 255, 255, 0.03); border-radius: 0 16px 16px 0; font-size: 1.4rem; line-height: 1.8; }
        
        @media (max-width: 1024px) {
          .markdown-content p { font-size: 1.3rem; }
          .markdown-content h2 { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
};

export d

