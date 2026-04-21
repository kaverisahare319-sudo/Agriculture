import React from 'react';
import { Leaf, Sprout, CloudRain, Droplet, Sun, Bell, ChevronRight, Activity } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar" style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container flex-between">
          <div className="logo flex-center" style={{ gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-dark)' }}>
            <Leaf size={32} color="var(--primary)" />
            <span>Kisan<span style={{ color: 'var(--accent)' }}>Mitra</span></span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#dashboard">Dashboard App</a>
          </div>
          <button className="btn btn-primary">Try Free</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="animate-fade-in">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Sprout size={18} />
            <span>AI & IoT Powered Farming</span>
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Kheti Me Kranti:<br/>
            <span className="text-primary">AI aur IoT Ke Saath</span>
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Smart faisle lijiye, paani aur khaad bachaiye, aur apni fasal ki upaj badhaiye. Real-time data ab aapke phone par.
          </p>
          <div className="flex-center" style={{ gap: '1rem' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Start Smart Farming <ChevronRight size={20} />
            </button>
            <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Kaise Kaam Karta Hai?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-card animate-fade-in stagger-1">
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Activity size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mitti Ki Jaanch</h3>
              <p className="text-muted">IoT sensors se NPK (Nitrogen, Phosphorus, Potassium) aur moisture ka real-time data paigam lijiye.</p>
            </div>

            <div className="glass-card animate-fade-in stagger-2">
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#dbeafe', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CloudRain size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mausam Ka Haal</h3>
              <p className="text-muted">Sateek mausam ki jankari (baarish, dhoop, hawa) taaki aap pehle se kheti ki tayari kar sakein.</p>
            </div>

            <div className="glass-card animate-fade-in stagger-3">
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#fef3c7', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Bell size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Smart Suggestions</h3>
              <p className="text-muted">Kab paani dena hai aur kitni khaad dalni hai — AI batayega aapki fasal ke hisaab se alerts.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', padding: '4rem', background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'var(--shadow-xl)' }}>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem' }}>Kisan Dashboard ki Ek Jhalak</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', marginBottom: '3rem', opacity: 0.9 }}>
            Humara dashboard aapko sari zaroori jankari ek hi jagah par deta hai. Mitti ki nami se lekar aane wale mausam tak, sab kuch simple aur clear.
          </p>
          
          {/* Mockup Dashboard UI */}
          <div style={{ width: '100%', maxWidth: '800px', backgroundColor: 'var(--bg-color)', borderRadius: '1.5rem', padding: '2rem', color: 'var(--text-main)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', boxShadow: 'rgba(0,0,0,0.2) 0px 20px 40px' }}>
            
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Moisture Level</span>
                <Droplet color="var(--secondary)" size={24} />
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>42%</div>
              <div style={{ color: 'var(--primary)', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 500 }}>Optimal Range (40-60%)</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Temperature</span>
                <Sun color="var(--accent)" size={24} />
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)' }}>32°C</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 500 }}>Sunny, H 35° L 24°</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', gridRow: 'span 2' }}>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>AI Alerts</span>
                <Bell color="#ef4444" size={24} />
              </div>
              <div style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '1rem', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 600, color: '#991b1b', fontSize: '0.9rem' }}>Watering Needed</p>
                <p style={{ color: '#b91c1c', fontSize: '0.8rem', marginTop: '0.2rem' }}>Soil moisture is dropping. Turn on the pump for 2 hours.</p>
              </div>
              <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: '1rem' }}>
                <p style={{ fontWeight: 600, color: 'var(--primary-dark)', fontSize: '0.9rem' }}>Fertilizer Schedule</p>
                <p style={{ color: 'var(--primary-dark)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Apply Urea within the next 2 days to maintain NPK ratio.</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', gridColumn: 'span 2' }}>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Soil Nutrients (NPK)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', height: '80px', gap: '1rem', paddingBottom: '0.5rem' }}>
                 {/* Bar Chart Mockup */}
                 <div style={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '0.5rem', position: 'relative', height: '100%' }}>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '80%', backgroundColor: 'var(--primary)', borderRadius: '0.5rem' }}></div>
                    <span style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600 }}>N (80%)</span>
                 </div>
                 <div style={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '0.5rem', position: 'relative', height: '100%' }}>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem' }}></div>
                    <span style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600 }}>P (40%)</span>
                 </div>
                 <div style={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '0.5rem', position: 'relative', height: '100%' }}>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', backgroundColor: 'var(--accent)', borderRadius: '0.5rem' }}></div>
                    <span style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600 }}>K (60%)</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="logo flex-center" style={{ gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem', justifyContent: 'center' }}>
            <Leaf size={24} color="var(--primary)" />
            <span>Kisan<span style={{ color: 'var(--accent)' }}>Mitra</span></span>
          </div>
          <p className="text-muted">© 2026 Smart Agriculture Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
