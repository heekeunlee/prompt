import React from 'react';
import Hero from '../components/Hero';
import ChapterCard from '../components/ChapterCard';
import { curriculum } from '../data/curriculum';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section id="curriculum" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>R&D 엔지니어 커리큘럼</h2>
            <p style={{ color: '#94a3b8' }}>반도체, 디스플레이, 배터리 등 첨단 연구 현장을 위한 체계적인 프롬프트 엔지니어링 강의</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {curriculum.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
