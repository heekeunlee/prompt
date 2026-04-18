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
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            R&D 엔지니어를 위한 <br />
            <span className="gradient-text">AI 공정 파트너십</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto 2.5rem', color: '#94a3b8', fontSize: '1.25rem', lineHeight: 1.6 }}>
            반도체, 디스플레이, 이차전지 연구 현장의 리더들을 위해 설계되었습니다. <br />
            단순 대화를 넘어 정밀 공정 데이터와 시뮬레이션을 장악하는 프롬프트 기술을 만나보세요.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#curriculum" className="primary-button">
              강의 시작하기 <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
