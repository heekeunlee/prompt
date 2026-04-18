import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src={heroImg} alt="AI Hero" className="hero-image" />
      </div>
      <div className="container" style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
        <div className="animate-fade-in glass-card" style={{ padding: '4rem 2rem', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(99, 102, 241, 0.2)', padding: '0.6rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.4)', marginBottom: '2.5rem', color: '#a5b4fc', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.05em' }}>
            <Zap size={20} fill="#6366f1" />
            <span>AI PROMPTING MASTERCLASS</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.2, fontWeight: 900, color: '#fff' }}>
            R&D 엔지니어를 위한 <br />
            <span className="gradient-text">AI 바이브 코딩 프롬프트 가이드</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: '#cbd5e1', fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 500 }}>
            반도체, 디스플레이, 이차전지 연구 현장의 리더들을 위해 설계되었습니다. <br />
            단순 대화를 넘어 정밀 공정 데이터와 시뮬레이션을 장악하는 프롬프트 기술을 만나보세요.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#curriculum" className="primary-button" style={{ fontSize: '1.1rem', padding: '1.1rem 2.8rem' }}>
              교안 학습 시작하기 <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', width: '100%', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>
        Curriculum Version: v1.4.1 (Stable)
      </div>
    </section>
  );
};

export default Hero;
