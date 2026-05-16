export const SKILL_CONTENT = {
  '1': (
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
  ),
  '2': (
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
  ),
  '3': (
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
  ),
  '4': (
    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', position: 'relative', paddingLeft: '2rem' }}>
      <div style={{ position: 'absolute', top: '1rem', bottom: '1rem', left: '0', width: '2px', background: 'linear-gradient(to bottom, #ef4444, #f97316, #f59e0b, #84cc16, #10b981, #06b6d4, #8b5cf6)' }}></div>
      {[
        { stage: 1, title: '知道 (Awareness)', desc: '藉由溝通產品利益來激勵對產品的興趣。讓客戶了解產品的特色、優點及可以帶來的利益。', color: '#ef4444' },
        { stage: 2, title: '發生興趣 (Interest)', desc: '強調產品利益與客戶需求的連結。', color: '#f97316' },
        { stage: 3, title: '評估 (Evaluation)', desc: '釐清使用產品的機會點。', color: '#f59e0b' },
        { stage: 4, title: '試用 (Trial)', desc: '機會出現時，激勵使用。', color: '#84cc16' },
        { stage: 5, title: '使用 (Usage)', desc: '強化成功使用的經驗並減少負面評價來鼓勵重複採用。', color: '#10b981' },
        { stage: 6, title: '重複使用 (Repeat)', desc: '維持滿意度並持續強化產品的定位。', color: '#06b6d4' },
        { stage: 7, title: '擁護 (Advocacy)', desc: '強化 brand 忠誠度。', color: '#8b5cf6' }
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
  ),
  '5': (
    <>
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0, color: '#f59e0b', fontSize: '1.8rem', fontWeight: 800 }}>A級客戶</h2>
            <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderRadius: '999px', fontWeight: 'bold' }}>高度優先</span>
          </div>
          <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>80/20法則重點經營</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>高潛力且高忠誠度，是維持業績的命脈。</p>
        </div>
        <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0, color: '#10b981', fontSize: '1.8rem', fontWeight: 800 }}>B級客戶</h2>
            <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '999px', fontWeight: 'bold' }}>增加產品認同</span>
          </div>
          <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>短期業績來源</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>高潛力但低忠誠度，需要花時間溝通建立信任。</p>
        </div>
        <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.15), transparent 60%)', pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0, color: '#38bdf8', fontSize: '1.8rem', fontWeight: 800 }}>C級客戶</h2>
            <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderRadius: '999px', fontWeight: 'bold' }}>放長線釣大魚</span>
          </div>
          <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>長期經營</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>低潛力但高忠誠度，維持穩定關係即可。</p>
        </div>
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
    </>
  ),
};
