import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>行政執行流程｜新人版</h1>
      <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginTop: 'calc(var(--space-2) * -1)', marginBottom: 'var(--space-8)' }}>
        以下為各項行政作業的標準流程與教學指引。
      </h2>

      <div className="grid-cards">
        <div className="card" onClick={() => navigate('/process/1')} style={{ cursor: 'pointer' }}>
          <h3>
            <span>📋</span> 行政費用與單據
          </h3>
          <p>了解如何申請行銷與營業費用，以及折讓單、報核表的核銷與紙本遞送。</p>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="badge">行銷審會</span>
            <span className="badge">營業費審會</span>
            <span className="badge">折讓單</span>
          </div>
        </div>

        <div className="card" onClick={() => navigate('/process/3')} style={{ cursor: 'pointer' }}>
          <h3>
            <span>📦</span> 業務銷售與出貨
          </h3>
          <p>從報價單申請、系統建價，到控貨品項的評估出貨與後續退換貨處理。</p>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="badge">報價單</span>
            <span className="badge">控貨出貨</span>
            <span className="badge warning">退換貨物流</span>
          </div>
        </div>

        <div className="card" onClick={() => navigate('/process/7')} style={{ cursor: 'pointer' }}>
          <h3>
            <span>📝</span> 日常業務規劃
          </h3>
          <p>拜訪客戶前的準備計畫與定期的業務規劃、花費申報。</p>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="badge">Pre-Call</span>
            <span className="badge">EXPENSE</span>
            <span className="badge">MOR</span>
            <span className="badge">週行程</span>
          </div>
        </div>

        <div className="card" onClick={() => navigate('/skills/1')} style={{ cursor: 'pointer' }}>
          <h3>
            <span>💡</span> 業務技巧與心法
          </h3>
          <p>掌握辦活動訣竅、SMART目標設定、GROW對話模式及客戶分級經營。</p>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="badge">活動準備</span>
            <span className="badge">SMART</span>
            <span className="badge">GROW</span>
            <span className="badge">客戶分級</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
