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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 1rem', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.2)', marginBottom: '2rem', color: '#818cf8', fontWeight: 600, fontSize: '0.9rem' }}>
            <Zap size={16} />
            <span>AI Prompting Masterclass</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            AI와 소통하는 <br />
            <span className="gradient-text">가장 완벽한 방법</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#94a3b8', fontSize: '1.1rem' }}>
            바이브 코딩부터 정교한 시스템 프롬프트까지. AI의 잠재력을 120% 끌어내는 프롬프트 엔지니어링의 정석을 지금 시작하세요.
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
