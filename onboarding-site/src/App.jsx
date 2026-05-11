import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand-logo">
          <span>◆</span> 新人行政教學
        </div>
        
        <div className="nav-group">
          <div className="nav-title">導覽</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>首頁 (總覽)</li>
            <li className={`nav-item ${activeTab === 'who' ? 'active' : ''}`} onClick={() => setActiveTab('who')}>角色與聯絡人</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">資源與下載</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'forms' ? 'active' : ''}`} onClick={() => setActiveTab('forms')}>表單下載庫</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">行政費用與單據</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'process-1' ? 'active' : ''}`} onClick={() => setActiveTab('process-1')}>行銷審會流程</li>
            <li className={`nav-item ${activeTab === 'process-2' ? 'active' : ''}`} onClick={() => setActiveTab('process-2')}>營業費審會流程</li>
            <li className={`nav-item ${activeTab === 'process-4' ? 'active' : ''}`} onClick={() => setActiveTab('process-4')}>折讓單與報核表</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">業務銷售與出貨</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'process-3' ? 'active' : ''}`} onClick={() => setActiveTab('process-3')}>報價單與特惠價格卡</li>
            <li className={`nav-item ${activeTab === 'process-6' ? 'active' : ''}`} onClick={() => setActiveTab('process-6')}>控貨品項出貨</li>
            <li className={`nav-item ${activeTab === 'process-5' ? 'active' : ''}`} onClick={() => setActiveTab('process-5')}>退換貨處理</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">日常業務規劃</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'process-7' ? 'active' : ''}`} onClick={() => setActiveTab('process-7')}>Pre-Call Plan</li>
            <li className={`nav-item ${activeTab === 'process-8' ? 'active' : ''}`} onClick={() => setActiveTab('process-8')}>EXPENSE</li>
            <li className={`nav-item ${activeTab === 'process-9' ? 'active' : ''}`} onClick={() => setActiveTab('process-9')}>MOR</li>
            <li className={`nav-item ${activeTab === 'process-10' ? 'active' : ''}`} onClick={() => setActiveTab('process-10')}>週行程</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">業務技巧與心法</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'skills-1' ? 'active' : ''}`} onClick={() => setActiveTab('skills-1')}>活動準備</li>
            <li className={`nav-item ${activeTab === 'skills-2' ? 'active' : ''}`} onClick={() => setActiveTab('skills-2')}>SMART 目標設定</li>
            <li className={`nav-item ${activeTab === 'skills-3' ? 'active' : ''}`} onClick={() => setActiveTab('skills-3')}>GROW 溝通模式</li>
            <li className={`nav-item ${activeTab === 'skills-4' ? 'active' : ''}`} onClick={() => setActiveTab('skills-4')}>客戶採用階梯</li>
            <li className={`nav-item ${activeTab === 'skills-5' ? 'active' : ''}`} onClick={() => setActiveTab('skills-5')}>客戶分級</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="glass-header">
          <div style={{ color: 'var(--text-secondary)' }}>內部文件參考</div>
          <button className="btn-primary" onClick={() => setActiveTab('forms')}>相關表單下載</button>
        </div>

        {activeTab === 'home' && (
          <div>
            <h1>行政執行流程｜新人版</h1>
            <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginTop: '-0.5rem', marginBottom: '2rem' }}>
              以下為各項行政作業的標準流程與教學指引。
            </h2>

            <div className="grid-cards">
              <div className="card hover-glow" onClick={() => setActiveTab('process-1')} style={{cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'}}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 60%)', pointerEvents: 'none' }}></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                  <span style={{ fontSize: '1.4rem' }}>📋</span> 行政費用與單據
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>了解如何申請行銷與營業費用，以及折讓單、報核表的核銷與紙本遞送。</p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge">行銷審會</span>
                  <span className="badge">營業費審會</span>
                  <span className="badge">折讓單</span>
                </div>
              </div>

              <div className="card hover-glow" onClick={() => setActiveTab('process-3')} style={{cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'}}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.1), transparent 60%)', pointerEvents: 'none' }}></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                  <span style={{ fontSize: '1.4rem' }}>📦</span> 業務銷售與出貨
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>從報價單申請、系統建價，到控貨品項的評估出貨與後續退換貨處理。</p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge">報價單</span>
                  <span className="badge">控貨出貨</span>
                  <span className="badge warning">退換貨物流</span>
                </div>
              </div>

              <div className="card hover-glow" onClick={() => setActiveTab('process-7')} style={{cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'}}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.1), transparent 60%)', pointerEvents: 'none' }}></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                  <span style={{ fontSize: '1.4rem' }}>📝</span> 日常業務規劃
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>拜訪客戶前的準備計畫與定期的業務規劃、花費申報。</p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge">Pre-Call</span>
                  <span className="badge">EXPENSE</span>
                  <span className="badge">MOR</span>
                  <span className="badge">週行程</span>
                </div>
              </div>

              <div className="card hover-glow" onClick={() => setActiveTab('skills-1')} style={{cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'}}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(236, 72, 153, 0.1), transparent 60%)', pointerEvents: 'none' }}></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                  <span style={{ fontSize: '1.4rem' }}>💡</span> 業務技巧與心法
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>掌握辦活動訣竅、SMART目標設定、GROW對話模式及客戶分級經營。</p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge">活動準備</span>
                  <span className="badge">SMART</span>
                  <span className="badge">GROW</span>
                  <span className="badge">客戶分級</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'who' && (
          <div className="process-view">
            <h1>角色與聯絡人</h1>
            <p style={{ color: 'var(--text-secondary)' }}>搞懂大家是誰，送簽核與交紙本才不會迷路。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderTop: '3px solid var(--accent-primary)', background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-primary)', border: 'none' }}>發起者</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>PSR (醫藥業務代表)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>發起各項流程、準備資料與報表的主角，也就是你！</p>
              </div>
              <div className="card" style={{ borderTop: '3px solid #3b82f6', background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: 'none' }}>第一站</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>主管 (直屬主管)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>所有申請與報表的第一審核者，請務必先與主管對焦。</p>
              </div>
              <div className="card" style={{ borderTop: '3px solid var(--accent-success)', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-success)', border: 'none', fontWeight: 'bold' }}>最高簽核</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>Champion (營業部協理)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>絕大部分行政流程的最終拍板決定者。</p>
              </div>
              <div className="card" style={{ borderTop: '3px solid var(--accent-warning)', background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-warning)', border: 'none' }}>行銷部 / 紙本</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>Joanne</h3>
                <p style={{ color: 'var(--text-secondary)' }}>專門負責接收 <strong>行銷審會</strong> 相關的紙本正本資料。</p>
              </div>
              <div className="card" style={{ borderTop: '3px solid var(--accent-warning)', background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-warning)', border: 'none' }}>營管部 / 庶務</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>Anita</h3>
                <p style={{ color: 'var(--text-secondary)' }}>負責營業費紙本、報價單用印、折讓單留存以及安排退換貨物流。</p>
              </div>
              <div className="card" style={{ borderTop: '3px solid #8b5cf6', background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%)' }}>
                <span className="badge" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6', border: 'none' }}>行銷部審核</span>
                <h3 style={{marginTop: '0.8rem', color: 'var(--text-primary)'}}>PM / Jerry / Bernie</h3>
                <p style={{ color: 'var(--text-secondary)' }}>行銷審會流程與部分控貨出貨的中繼審核站。</p>
              </div>
            </div>
          </div>
        )}

        {/* Forms Library */}
        {activeTab === 'forms' && (
          <div className="process-view">
            <h1>表單下載庫</h1>
            <p style={{ color: 'var(--text-secondary)' }}>常用行政、業務表單快速下載，點擊即可取得最新版本。這是一套快速查找的後台依托模板設計。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card">
                <h3>📝 行政與費用類表單</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0' }}>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>付款憑單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/01_行政範本與月結報支/[範本]_PMS_付款憑證.xlsx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>報核表</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/01_行政範本與月結報支/[範本]_報核表.doc" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>折讓單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/01_行政範本與月結報支/[範本]_折讓單.xls" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>演講/主持費收據簽收單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/01_行政範本與月結報支/[範本]_演講費收據_模板.docx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>📦 業務與出貨類表單</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0' }}>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>報價單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/03_報價單範例/報價單-耕莘台北%2020260401健保調降(EDB-SMN)-20250422.xls" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>特惠價格卡</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/tree/main/03_行政作業" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>前往資料夾</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>用印申請單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/04_用印申請作業/用印申請單__耕莘台北健保調降報價單_0422_George.doc" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>退換貨處理單</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/tree/main/03_行政作業" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>前往資料夾</a>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>📝 日常作業類表單</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0' }}>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>週行程規劃範本</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/01_週期性報表與行程/01_週行程規劃_範本.xlsx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Pre-Call Plan 模板</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/tree/main/01_週期性報表與行程" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>前往資料夾</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>EXPENSE 費用申報表</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/03_行政作業/01_行政範本與月結報支/[範本]_expense_月結表.xlsx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                  <li style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>MOR 月會報告模板</span>
                    <a href="https://github.com/skydreamer0/enterprise-onboarding-portal/raw/main/01_週期性報表與行程/03_MOR月度營運會議報告_示範結構.pptx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}>下載</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 1 */}
        {activeTab === 'process-1' && (
          <div className="process-view">
            <h1>行銷審會審核流程</h1>
            <p style={{ color: 'var(--text-secondary)' }}>適用於行銷相關專案與費用的申請。</p>
            
            <div className="card" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>流程步驟</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">1</span><div><strong>PSR</strong> 準備資料</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">2</span><div>送 <strong>直屬主管</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">3</span><div>送 <strong>PM</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">4</span><div>送 <strong>Jerry / Bernie</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>5</span><div>送 <strong>Champion</strong> 最終確認</div>
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

        {/* Process 2 */}
        {activeTab === 'process-2' && (
          <div className="process-view">
            <h1>營業費審會審核流程</h1>
            <p style={{ color: 'var(--text-secondary)' }}>適用於業務端日常營業費用的申請。</p>
            
            <div className="card" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>流程步驟</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">1</span><div><strong>PSR</strong> 準備資料</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">2</span><div>送 <strong>直屬主管</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>3</span><div>送 <strong>Champion</strong> 最終確認</div>
              </div>
            </div>

            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-danger)', background: 'rgba(239, 68, 68, 0.05)' }}>
                <h3>🔔 注意事項</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li>需先向主管確認欲申請的「費審編號」。</li>
                </ul>
              </div>
              <div className="card" style={{ borderColor: 'var(--accent-warning)', background: 'rgba(245, 158, 11, 0.05)' }}>
                <h3>⚠️ 憑單與紙本處理</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>付款憑單與單據掃描後，提供給 主管 與 Champion。</li>
                  <li><strong>紙本正本請交給 Anita</strong>。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 3 */}
        {activeTab === 'process-3' && (
          <div className="process-view">
            <h1>報價單與特惠價格卡</h1>
            <p style={{ color: 'var(--text-secondary)' }}>分為「提出報價需求」與「院方接受價格後」兩個情境。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: 'var(--accent-primary)' }}>情境一：提出報價需求</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">1</span><div><strong>PSR</strong> 提出需求取得授權</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">2</span><div>填寫 <strong>報價單</strong> & <strong>用印申請單</strong></div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">3</span><div>送 <strong>直屬主管</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">4</span><div>送 <strong>Champion</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge warning">5</span><div>交由 <strong>Anita</strong> 協助用印</div>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: 'var(--accent-success)' }}>情境二：院方接受價格後</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">1</span><div>需於公司系統 <strong>建立價格</strong></div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">2</span><div>填寫 <strong>特惠價格卡</strong></div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">3</span><div>送 <strong>直屬主管</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>4</span><div>送 <strong>Champion</strong> 審核</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process 4 */}
        {activeTab === 'process-4' && (
          <div className="process-view">
            <h1>折讓單與報核表</h1>
            <p style={{ color: 'var(--text-secondary)' }}>處理折讓單據與報核表審批流程。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: 'var(--accent-primary)' }}>折讓單處理</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">1</span><div><strong>PSR</strong> 填寫折讓單</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">2</span><div>交由 <strong>醫院採購</strong> 蓋章</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">3</span><div>收回回執聯</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge warning">4</span><div>交給 <strong>Anita</strong> 留存</div>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: 'var(--accent-success)' }}>報核表處理</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">1</span><div><strong>PSR</strong> 填寫報核表</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">2</span><div>附上 <strong>折讓單掃描檔</strong></div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">3</span><div>送 <strong>直屬主管</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>4</span><div>送 <strong>Champion</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge warning">5</span><div>完成 <strong>用印</strong> 流程</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process 5 */}
        {activeTab === 'process-5' && (
          <div className="process-view">
            <h1>退換貨處理</h1>
            <p style={{ color: 'var(--text-secondary)' }}>當發生商品退換貨需求時的標準流程。</p>
            
            <div className="card" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>流程步驟</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">1</span><div><strong>PSR</strong> 提出退換貨需求</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">2</span><div>取得授權後，填寫 <strong>退換貨處理單</strong></div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">3</span><div>送 <strong>直屬主管</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>4</span><div>送 <strong>Champion</strong> 審核</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">5</span><div>由 <strong>Anita</strong> 安排物流退換貨</div>
              </div>
            </div>
          </div>
        )}

        {/* Process 6 */}
        {activeTab === 'process-6' && (
          <div className="process-view">
            <h1>控貨品項出貨</h1>
            <p style={{ color: 'var(--text-secondary)' }}>針對受控管的品項，進行出貨評估的流程。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>流程步驟</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">1</span><div>先詢問院方 <strong>庫存量</strong></div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">2</span><div>評估是否需要出貨</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge">3</span><div>送 <strong>直屬主管</strong> 審核</div>
                </div>
                <div style={{ width: '2px', height: '10px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>4</span><div>視品項與狀況，送 <strong>Champion</strong> 或 <strong>PM</strong> 確認</div>
                </div>
              </div>

              <div className="card" style={{ borderColor: 'var(--accent-danger)', background: 'rgba(239, 68, 68, 0.05)' }}>
                <h3>⏰ 時效性提醒</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    <strong>須於當日 15:00 前提出！</strong>
                  </li>
                  <li style={{ marginTop: '0.5rem' }}>逾時將影響出貨進度，請務必掌握時間。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 7 */}
        {activeTab === 'process-7' && (
          <div className="process-view">
            <h1>Pre-Call Plan</h1>
            <p style={{ color: 'var(--text-secondary)' }}>拜訪客戶前的準備計畫與提交規範。</p>
            
            <div className="card" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>流程步驟</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">1</span><div><strong>PSR</strong> 完成計畫撰寫</div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>2</span><div>提供給 <strong>直屬主管</strong></div>
              </div>
              <div style={{ width: '2px', height: '20px', background: 'var(--border-color)', marginLeft: '14px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge">3</span><div>同步副本給 <strong>Champion</strong></div>
              </div>
            </div>

            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-danger)', background: 'rgba(239, 68, 68, 0.05)' }}>
                <h3>⏰ 時效性提醒</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    <strong>最晚需於 Coaching 前一週完成！</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 8 */}
        {activeTab === 'process-8' && (
          <div className="process-view">
            <h1>EXPENSE (費用申報)</h1>
            <p style={{ color: 'var(--text-secondary)' }}>日常業務與行政費用的結報流程。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-warning)', background: 'rgba(245, 158, 11, 0.05)' }}>
                <h3>⏰ 時效性提醒</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    <strong>每個月申報一次！</strong>
                  </li>
                  <li style={{ marginTop: '0.5rem' }}>請注意各項單據與發票的整理。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 9 */}
        {activeTab === 'process-9' && (
          <div className="process-view">
            <h1>MOR (Monthly Operating Review)</h1>
            <p style={{ color: 'var(--text-secondary)' }}>月度營運回顧與業務會議準備。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-warning)', background: 'rgba(245, 158, 11, 0.05)' }}>
                <h3>⏰ 時效性提醒</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    <strong>每個月執行一次！</strong>
                  </li>
                  <li style={{ marginTop: '0.5rem' }}>準備並回顧當月業績、重要指標與下個月預估。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process 10 */}
        {activeTab === 'process-10' && (
          <div className="process-view">
            <h1>週行程規劃</h1>
            <p style={{ color: 'var(--text-secondary)' }}>提交下一週的客戶拜訪與業務行程安排。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ borderColor: 'var(--accent-danger)', background: 'rgba(239, 68, 68, 0.05)' }}>
                <h3>⏰ 時效性提醒</h3>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0 }}>
                  <li style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    <strong>每個禮拜五要交！</strong>
                  </li>
                  <li style={{ marginTop: '0.5rem' }}>務必於週五下班前完成提交。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Skill 1: 活動準備 */}
        {activeTab === 'skills-1' && (
          <div className="process-view">
            <h1>活動準備</h1>
            <p style={{ color: 'var(--text-secondary)' }}>辦活動三大步驟與各階段待辦事項。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>🎯 辦活動三大步驟</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-primary)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>找出客戶不處方的三大主因</strong>
                    </div>
                  </div>
                  <div style={{ width: '2px', height: '12px', background: 'rgba(99, 102, 241, 0.3)', marginLeft: '11px' }}></div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-primary)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>找出合適的講師</strong>
                      <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>溝通怎麼解決三大主因</p>
                    </div>
                  </div>
                  <div style={{ width: '2px', height: '12px', background: 'rgba(99, 102, 241, 0.3)', marginLeft: '11px' }}></div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-primary)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>會議後的 F/U</strong>
                      <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>確認有無解決三大主因</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h3 style={{ color: 'var(--accent-success)' }}>✅ 活動時程檢核表</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-success)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>活動前</strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <li>Speaker、Moderator確認 (Slides事先提供、Review Slides)</li>
                      <li>餐廳選擇：以有包廂、可投影者佳</li>
                      <li>費審會：1週前確認有無編號</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-success)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>活動中</strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <li>簽到表、筆、Detailing Aids</li>
                      <li>場佈、確認現場(投影)狀況</li>
                      <li>協助餐點發放(Lecture) / 座位安排與催餐(RTD)</li>
                      <li>結帳、收拾與接送客戶工作分配</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-success)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>活動後</strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <li>演講/主持費收據簽收單</li>
                      <li>付款憑單</li>
                      <li>簽到表(需符合費審會人數)</li>
                      <li>發票</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skill 2: SMART 目標設定 */}
        {activeTab === 'skills-2' && (
          <div className="process-view">
            <h1>目標設定 - SMART</h1>
            <p style={{ color: 'var(--text-secondary)' }}>制定明確且可執行的目標原則。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.5rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '50px', textAlign: 'center', filter: 'drop-shadow(0 4px 12px rgba(129, 140, 248, 0.2))' }}>S</div>
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Specific</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>目標必須是<strong>具體</strong>的</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.5rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '50px', textAlign: 'center', filter: 'drop-shadow(0 4px 12px rgba(129, 140, 248, 0.2))' }}>M</div>
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Measurable</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>目標必須是<strong>可以衡量</strong>的</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.5rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '50px', textAlign: 'center', filter: 'drop-shadow(0 4px 12px rgba(129, 140, 248, 0.2))' }}>A</div>
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Attainable</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>目標必須是<strong>可以達到</strong>的</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.5rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '50px', textAlign: 'center', filter: 'drop-shadow(0 4px 12px rgba(129, 140, 248, 0.2))' }}>R</div>
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Relevant</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>目標必須和其他目標<strong>具有相關性</strong></p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.5rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '50px', textAlign: 'center', filter: 'drop-shadow(0 4px 12px rgba(129, 140, 248, 0.2))' }}>T</div>
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Time-based</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>目標必須具有<strong>明確的截止期限</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skill 3: GROW 溝通對話方法 */}
        {activeTab === 'skills-3' && (
          <div className="process-view">
            <h1>溝通對話方法 - GROW Model</h1>
            <p style={{ color: 'var(--text-secondary)' }}>透過四個步驟引導有成效的對話。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1 }}>G</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>GOAL (目標設定)</h3>
                  <p style={{ color: 'var(--accent-primary)', margin: 0, fontWeight: 500 }}>What do you want?</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1 }}>R</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>REALITY (檢核現狀)</h3>
                  <p style={{ color: '#f59e0b', margin: 0, fontWeight: 500 }}>Where are you now?</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }}></div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1 }}>O</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>OPTIONS (選擇方案)</h3>
                  <p style={{ color: '#8b5cf6', margin: 0, fontWeight: 500 }}>What could you do?</p>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0ea5e9, #6366f1)' }}></div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1 }}>W</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>WILL (行動計畫)</h3>
                  <p style={{ color: '#0ea5e9', margin: 0, fontWeight: 500 }}>What will you do?</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skill 4: 客戶採用階梯 */}
        {activeTab === 'skills-4' && (
          <div className="process-view">
            <h1>客戶採用階梯</h1>
            <p style={{ color: 'var(--text-secondary)' }}>了解客戶接受產品的各個階段，對症下藥。</p>
            
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', position: 'relative', paddingLeft: '2rem' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', top: '1rem', bottom: '1rem', left: '0', width: '2px', background: 'linear-gradient(to bottom, #ef4444, #f97316, #f59e0b, #84cc16, #10b981, #06b6d4, #8b5cf6)' }}></div>

              {[
                { stage: 1, title: '知道 (Awareness)', desc: '藉由溝通產品利益來激勵對產品的興趣。讓客戶了解產品的特色、優點及可以帶來的利益。', color: '#ef4444' },
                { stage: 2, title: '發生興趣 (Interest)', desc: '強調產品利益與客戶需求的連結。', color: '#f97316' },
                { stage: 3, title: '評估 (Evaluation)', desc: '釐清使用產品的機會點。', color: '#f59e0b' },
                { stage: 4, title: '試用 (Trial)', desc: '機會出現時，激勵使用。', color: '#84cc16' },
                { stage: 5, title: '使用 (Usage)', desc: '強化成功使用的經驗並減少負面評價來鼓勵重複採用。', color: '#10b981' },
                { stage: 6, title: '重複使用 (Repeat)', desc: '維持滿意度並持續強化產品的定位。', color: '#06b6d4' },
                { stage: 7, title: '擁護 (Advocacy)', desc: '強化品牌忠誠度。', color: '#8b5cf6' }
              ].map((item) => (
                <div key={item.stage} style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.4rem', top: '50%', transform: 'translateY(-50%)', width: '1.2rem', height: '1.2rem', borderRadius: '50%', background: 'var(--bg-base)', border: `3px solid ${item.color}`, boxShadow: `0 0 12px ${item.color}80`, zIndex: 1 }}></div>
                  <div className="card" style={{ flex: 1, border: `1px solid ${item.color}30`, background: `linear-gradient(90deg, ${item.color}10, transparent)`, padding: '1.2rem 1.5rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: item.color, display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: `${item.color}20`, borderRadius: '4px', color: item.color, fontWeight: 'bold' }}>Stage {item.stage}</span>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skill 5: 客戶分級 */}
        {activeTab === 'skills-5' && (
          <div className="process-view">
            <h1>客戶分級</h1>
            <p style={{ color: 'var(--text-secondary)' }}>依據「處方比例(忠誠度)」與「病人數(潛力)」來區分客戶層級。</p>
            
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* A級 */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: '#f59e0b', fontSize: '1.8rem', fontWeight: 800 }}>A級客戶</h2>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderRadius: '999px', fontWeight: 'bold' }}>高度優先</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>80/20法則重點經營</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>高潛力且高忠誠度，是維持業績的命脈。</p>
              </div>
              
              {/* B級 */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: '#10b981', fontSize: '1.8rem', fontWeight: 800 }}>B級客戶</h2>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '999px', fontWeight: 'bold' }}>增加產品認同</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>短期業績來源</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>高潛力但低忠誠度，需要花時間溝通建立信任。</p>
              </div>

              {/* C級 */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: '#38bdf8', fontSize: '1.8rem', fontWeight: 800 }}>C級客戶</h2>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderRadius: '999px', fontWeight: 'bold' }}>放長線釣大魚</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>長期經營</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>低潛力但高忠誠度，維持穩定關係即可。</p>
              </div>

              {/* D級 */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(163, 163, 163, 0.3)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(163, 163, 163, 0.1), transparent 60%)', pointerEvents: 'none' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: '#a3a3a3', fontSize: '1.8rem', fontWeight: 800 }}>D級客戶</h2>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(163, 163, 163, 0.15)', color: '#a3a3a3', borderRadius: '999px', fontWeight: 'bold' }}>狀況允許下才做</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>不浪費財力及人力於此</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>低潛力且低忠誠度，投入資源的投資報酬率極低。</p>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              💡 <strong>Y軸</strong>：病人數(潛力) ｜ <strong>X軸</strong>：處方比例(忠誠度)
            </div>
          </div>
        )}

      </main>
    </div>
  )
}

export default App
