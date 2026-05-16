import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StepProgress from '../../components/ui/StepProgress';

export const SKILL_CONTENT = {
  '1': (
    <div className="grid-cards">
      <Card>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>🎯 辦活動三大步驟</h3>
        <StepProgress 
          steps={[
            { title: '找出客戶不處方的三大主因' },
            { title: '找出合適的講師', description: '溝通怎麼解決三大主因' },
            { title: '會議後的 F/U', description: '確認有無解決三大主因' },
          ]}
          currentStep={2}
        />
      </Card>

      <Card style={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
        <h3 style={{ color: 'var(--accent-success)', marginBottom: 'var(--space-4)' }}>✅ 活動時程檢核表</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--accent-success)' }}>
            <strong style={{ display: 'block', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>活動前</strong>
            <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
              <li>Speaker、Moderator確認 (Slides事先提供、Review Slides)</li>
              <li>餐廳選擇：以有包廂、可投影者佳</li>
              <li>費審會：1週前確認有無編號</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--accent-success)' }}>
            <strong style={{ display: 'block', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>活動中</strong>
            <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
              <li>簽到表、筆、Detailing Aids</li>
              <li>場佈、確認現場(投影)狀況</li>
              <li>協助餐點發放(Lecture) / 座位安排與催餐(RTD)</li>
              <li>結帳、收拾與接送客戶工作分配</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--accent-success)' }}>
            <strong style={{ display: 'block', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>活動後</strong>
            <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
              <li>演講/主持費收據簽收單</li>
              <li>付款憑單</li>
              <li>簽到表(需符合費審會人數)</li>
              <li>發票</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  ),
  '2': (
    <div className="grid-cards">
      {['Specific', 'Measurable', 'Attainable', 'Relevant', 'Time-based'].map((word) => (
        <Card key={word} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-4)', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)' }}>
          <div style={{ fontSize: 'var(--font-5xl)', fontWeight: '800', background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', width: '60px', textAlign: 'center' }}>
            {word[0]}
          </div>
          <div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>{word}</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
              {word === 'Specific' && <>目標必須是<strong>具體</strong>的</>}
              {word === 'Measurable' && <>目標必須是<strong>可以衡量</strong>的</>}
              {word === 'Attainable' && <>目標必須是<strong>可以達到</strong>的</>}
              {word === 'Relevant' && <>目標必須和其他目標<strong>具有相關性</strong></>}
              {word === 'Time-based' && <>目標必須具有<strong>明確的截止期限</strong></>}
            </p>
          </div>
        </Card>
      ))}
    </div>
  ),
  '3': (
    <div className="grid-cards">
      {[
        { letter: 'G', title: 'GOAL (目標設定)', sub: 'What do you want?', color: '#10b981' },
        { letter: 'R', title: 'REALITY (檢核現狀)', sub: 'Where are you now?', color: '#f59e0b' },
        { letter: 'O', title: 'OPTIONS (選擇方案)', sub: 'What could you do?', color: '#8b5cf6' },
        { letter: 'W', title: 'WILL (行動計畫)', sub: 'What will you do?', color: '#0ea5e9' }
      ].map((item) => (
        <Card key={item.letter} style={{ textAlign: 'center', padding: 'var(--space-8) var(--space-4)', borderTop: `3px solid ${item.color}` }}>
          <div style={{ fontSize: 'var(--font-5xl)', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.9, marginBottom: 'var(--space-4)' }}>{item.letter}</div>
          <h3 style={{ margin: 0, fontSize: 'var(--font-base)' }}>{item.title}</h3>
          <p style={{ color: item.color, margin: 0, fontWeight: 600 }}>{item.sub}</p>
        </Card>
      ))}
    </div>
  ),
  '4': (
    <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', position: 'relative', paddingLeft: 'var(--space-8)' }}>
      <div style={{ position: 'absolute', top: 'var(--space-4)', bottom: 'var(--space-4)', left: '0', width: '2px', background: 'linear-gradient(to bottom, #ef4444, #f97316, #f59e0b, #84cc16, #10b981, #06b6d4, #8b5cf6)' }}></div>
      {[
        { stage: 1, title: '知道 (Awareness)', desc: '藉由溝通產品利益來激勵對產品的興趣。讓客戶了解產品的特色、優點及可以帶來的利益。', color: '#ef4444' },
        { stage: 2, title: '發生興趣 (Interest)', desc: '強調產品利益與客戶需求的連結。', color: '#f97316' },
        { stage: 3, title: '評估 (Evaluation)', desc: '釐清使用產品的機會點。', color: '#f59e0b' },
        { stage: 4, title: '試用 (Trial)', desc: '機會出現時，激勵使用。', color: '#84cc16' },
        { stage: 5, title: '使用 (Usage)', desc: '強化成功使用的經驗並減少負面評價來鼓勵重複採用。', color: '#10b981' },
        { stage: 6, title: '重複使用 (Repeat)', desc: '維持滿意度並持續強化產品的定位。', color: '#06b6d4' },
        { stage: 7, title: '擁護 (Advocacy)', desc: '強化品牌忠誠度。', color: '#8b5cf6' }
      ].map((item) => (
        <div key={item.stage} style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-6)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'calc(var(--space-8) * -1 - 9px)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-base)', border: `3px solid ${item.color}`, boxShadow: `0 0 12px ${item.color}80`, zIndex: 1 }}></div>
          <Card style={{ flex: 1, border: `1px solid ${item.color}30`, background: `linear-gradient(90deg, ${item.color}10, transparent)` }}>
            <h3 style={{ margin: 0, color: item.color, display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Badge style={{ backgroundColor: `${item.color}20`, color: item.color }}>Stage {item.stage}</Badge>
              {item.title}
            </h3>
            <p style={{ margin: 'var(--space-2) 0 0 0', color: 'var(--text-secondary)' }}>{item.desc}</p>
          </Card>
        </div>
      ))}
    </div>
  ),
  '5': (
    <>
      <div className="grid-cards">
        {[
          { level: 'A級客戶', priority: '高度優先', sub: '80/20法則重點經營', desc: '高潛力且高忠誠度，是維持業績的命脈。', color: '#f59e0b' },
          { level: 'B級客戶', priority: '增加產品認同', sub: '短期業績來源', desc: '高潛力但低忠誠度，需要花時間溝通建立信任。', color: '#10b981' },
          { level: 'C級客戶', priority: '放長線釣大魚', sub: '長期經營', desc: '低潛力但高忠誠度，維持穩定關係即可。', color: '#38bdf8' },
          { level: 'D級客戶', priority: '狀況允許下才做', sub: '不浪費財力及人力於此', desc: '低潛力且低忠誠度，投入資源的投資報酬率極低。', color: '#a3a3a3' }
        ].map((item) => (
          <Card key={item.level} style={{ borderBottom: `3px solid ${item.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <h2 style={{ margin: 0, color: item.color, fontSize: 'var(--font-3xl)' }}>{item.level}</h2>
              <Badge style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.priority}</Badge>
            </div>
            <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 600, fontSize: 'var(--font-base)' }}>{item.sub}</p>
            <p style={{ margin: 'var(--space-2) 0 0 0', color: 'var(--text-secondary)' }}>{item.desc}</p>
          </Card>
        ))}
      </div>
      <Card style={{ marginTop: 'var(--space-6)', textAlign: 'center', background: 'rgba(255,255,255,0.03)' }} hoverable={false}>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
          💡 <strong>Y軸</strong>：病人數(潛力) ｜ <strong>X軸</strong>：處方比例(忠誠度)
        </p>
      </Card>
    </>
  ),
};
