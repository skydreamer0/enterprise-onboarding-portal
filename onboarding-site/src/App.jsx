import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand-logo">
          <span>◆</span> 新人戰情中心
        </div>
        
        <div className="nav-group">
          <div className="nav-title">導覽</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>首頁 (總覽)</li>
            <li className={`nav-item ${activeTab === 'who' ? 'active' : ''}`} onClick={() => setActiveTab('who')}>角色與聯絡人</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">費用與核銷</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'process-1' ? 'active' : ''}`} onClick={() => setActiveTab('process-1')}>行銷審會流程</li>
            <li className={`nav-item ${activeTab === 'process-2' ? 'active' : ''}`} onClick={() => setActiveTab('process-2')}>營業費審會流程</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">銷售與報價</div>
          <ul className="nav-list">
            <li className="nav-item">報價單與特惠價格卡</li>
            <li className="nav-item">折讓單與報核表</li>
            <li className="nav-item">控貨品項出貨</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">售後與規劃</div>
          <ul className="nav-list">
            <li className="nav-item">退換貨處理</li>
            <li className="nav-item">Pre-Call Plan</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="glass-header">
          <div style={{ color: 'var(--text-secondary)' }}>Welcome to the team!</div>
          <button className="btn-primary">下載新人大補帖</button>
        </div>

        {activeTab === 'home' && (
          <div>
            <h1>Hi, 新夥伴 👋</h1>
            <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginTop: '-0.5rem', marginBottom: '2rem' }}>
              這是一個幫助你快速進入狀況的行政流程指南。
            </h2>

            <div className="grid-cards">
              <div className="card" onClick={() => setActiveTab('process-1')} style={{cursor: 'pointer'}}>
                <h3>💰 費用與核銷</h3>
                <p>了解如何申請行銷經費與營業費用，包含系統操作與紙本遞送。</p>
                <div style={{ marginTop: 'auto' }}>
                  <span className="badge">行銷審會</span>
                  <span className="badge">營業費審會</span>
                </div>
              </div>

              <div className="card">
                <h3>📝 銷售與報價</h3>
                <p>從報價單申請到價格卡建立，以及折讓與控貨出貨的完整路徑。</p>
                <div style={{ marginTop: 'auto' }}>
                  <span className="badge">報價單</span>
                  <span className="badge">特惠價格卡</span>
                  <span className="badge">折讓單</span>
                </div>
              </div>

              <div className="card">
                <h3>📦 售後與規劃</h3>
                <p>客訴、退換貨處理與日常 Pre-Call Plan 的繳交規則。</p>
                <div style={{ marginTop: 'auto' }}>
                  <span className="badge warning">退換貨物流</span>
                  <span className="badge">Pre-Call</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process-1' && (
          <div className="process-view">
            <h1>行銷審會審核流程</h1>
            <p style={{ color: 'var(--text-secondary)' }}>適用於行銷相關專案與費用的申請。</p>
            
            <div className="card" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>流程步驟</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">1</span>
                <div><strong>PSR</strong> 準備資料</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">2</span>
                <div>送 <strong>直屬主管</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">3</span>
                <div>送 <strong>PM</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">4</span>
                <div>送 <strong>Jerry / Bernie</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>5</span>
                <div>送 <strong>Champion (營業部協理)</strong> 最終確認</div>
              </div>
            </div>

            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-warning)', background: 'rgba(245, 158, 11, 0.05)' }}>
                <h3>⚠️ 紙本資料處理</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>付款憑單與相關單據掃描後，先提供給主管。</li>
                  <li><strong>正本資料務必交給 Joanne</strong> (行銷部)。</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
