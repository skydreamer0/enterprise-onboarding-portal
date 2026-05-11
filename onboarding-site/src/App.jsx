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
            <li className={`nav-item ${activeTab === 'process-3' ? 'active' : ''}`} onClick={() => setActiveTab('process-3')}>報價單與特惠價格卡</li>
            <li className={`nav-item ${activeTab === 'process-4' ? 'active' : ''}`} onClick={() => setActiveTab('process-4')}>折讓單與報核表</li>
            <li className={`nav-item ${activeTab === 'process-6' ? 'active' : ''}`} onClick={() => setActiveTab('process-6')}>控貨品項出貨</li>
          </ul>
        </div>

        <div className="nav-group">
          <div className="nav-title">售後與規劃</div>
          <ul className="nav-list">
            <li className={`nav-item ${activeTab === 'process-5' ? 'active' : ''}`} onClick={() => setActiveTab('process-5')}>退換貨處理</li>
            <li className={`nav-item ${activeTab === 'process-7' ? 'active' : ''}`} onClick={() => setActiveTab('process-7')}>Pre-Call Plan</li>
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

              <div className="card" onClick={() => setActiveTab('process-3')} style={{cursor: 'pointer'}}>
                <h3>📝 銷售與報價</h3>
                <p>從報價單申請到價格卡建立，以及折讓與控貨出貨的完整路徑。</p>
                <div style={{ marginTop: 'auto' }}>
                  <span className="badge">報價單</span>
                  <span className="badge">特惠價格卡</span>
                  <span className="badge">折讓單</span>
                </div>
              </div>

              <div className="card" onClick={() => setActiveTab('process-5')} style={{cursor: 'pointer'}}>
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

        {activeTab === 'who' && (
          <div className="process-view">
            <h1>角色與聯絡人</h1>
            <p style={{ color: 'var(--text-secondary)' }}>搞懂大家是誰，送簽核與交紙本才不會迷路。</p>
            
            <div className="grid-cards" style={{ marginTop: '2rem' }}>
              <div className="card">
                <span className="badge">發起者</span>
                <h3 style={{marginTop: '0.5rem'}}>PSR (醫藥業務代表)</h3>
                <p>發起各項流程、準備資料與報表的主角，也就是你！</p>
              </div>
              <div className="card">
                <span className="badge">第一站</span>
                <h3 style={{marginTop: '0.5rem'}}>主管 (直屬主管)</h3>
                <p>所有申請與報表的第一審核者，請務必先與主管對焦。</p>
              </div>
              <div className="card" style={{ borderColor: 'var(--accent-success)' }}>
                <span className="badge" style={{ backgroundColor: 'var(--accent-success)', color: '#000' }}>最高簽核</span>
                <h3 style={{marginTop: '0.5rem'}}>Champion (營業部協理)</h3>
                <p>絕大部分行政流程的最終拍板決定者。</p>
              </div>
              <div className="card" style={{ borderColor: 'var(--accent-warning)' }}>
                <span className="badge warning">行銷部 / 紙本</span>
                <h3 style={{marginTop: '0.5rem'}}>Joanne</h3>
                <p>專門負責接收 <strong>行銷審會</strong> 相關的紙本正本資料。</p>
              </div>
              <div className="card" style={{ borderColor: 'var(--accent-warning)' }}>
                <span className="badge warning">營管部 / 庶務</span>
                <h3 style={{marginTop: '0.5rem'}}>Anita</h3>
                <p>負責營業費紙本、報價單用印、折讓單留存以及安排退換貨物流。</p>
              </div>
              <div className="card">
                <span className="badge">行銷部審核</span>
                <h3 style={{marginTop: '0.5rem'}}>PM / Jerry / Bernie</h3>
                <p>行銷審會流程與部分控貨出貨的中繼審核站。</p>
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
                <h3 style={{ color: 'var(--accent-primary)' }}>情境一：折讓單處理</h3>
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
                <h3 style={{ color: 'var(--accent-success)' }}>情境二：報核表處理</h3>
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
                <span className="badge warning">5</span><div>由 <strong>Anita</strong> 安排物流退換貨</div>
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

      </main>
    </div>
  )
}

export default App
