import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src={heroImg} alt="AI Hero" className="hero-image" />
      </div>
      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <div className="animate-fade-in">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(99, 102, 241, 0.15)', padding: '0.8rem 2rem', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.3)', marginBottom: '3rem', color: '#a5b4fc', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em' }}>
            <Zap size={24} fill="#6366f1" />
            <span>AI PROMPTING MASTERCLASS</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', marginBottom: '1.5rem', lineHeight: 1.2, fontWeight: 900 }}>
            R&D 엔지니어를 위한 <br />
            <span className="gradient-text">AI 바이브 코딩 프롬프트 가이드</span>
          </h1>
          <p style={{ maxWidth: '850px', margin: '0 auto 3rem', color: '#cbd5e1', fontSize: '1.4rem', lineHeight: 1.7, fontWeight: 500, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            반도체, 디스플레이, 이차전지 연구 현장의 리더들을 위해 설계되었습니다. <br />
            단순 대화를 넘어 정밀 공정 데이터와 시뮬레이션을 장악하는 프롬프트 기술을 만나보세요.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href="#curriculum" className="primary-button" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
              교안 학습 시작하기 <ArrowRight size={24} />
            </a>
          </div>
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', fontWeight: 600 }}>
            Curriculum Version: v1.4.1 (Latest)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
