const Roles = () => {
  return (
    <div className="process-view">
      <h1>角色與聯絡人</h1>
      <p style={{ color: 'var(--text-secondary)' }}>搞懂大家是誰，送簽核與交紙本才不會迷路。</p>
      
      <div className="grid-cards" style={{ marginTop: 'var(--space-8)' }}>
        <div className="card" style={{ borderTop: '3px solid var(--accent-primary)', background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', border: 'none' }}>發起者</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>PSR (醫藥業務代表)</h3>
          <p>發起各項流程、準備資料與報表的主角，也就是你！</p>
        </div>
        <div className="card" style={{ borderTop: '3px solid #3b82f6', background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'none' }}>第一站</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>主管 (直屬主管)</h3>
          <p>所有申請與報表的第一審核者，請務必先與主管對焦。</p>
        </div>
        <div className="card" style={{ borderTop: '3px solid var(--accent-success)', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-success)', border: 'none' }}>最高簽核</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>Champion (營業部協理)</h3>
          <p>絕大部分行政流程的最終拍板決定者。</p>
        </div>
        <div className="card" style={{ borderTop: '3px solid var(--accent-warning)', background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-warning)', border: 'none' }}>行銷部 / 紙本</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>Joanne</h3>
          <p>專門負責接收 <strong>行銷審會</strong> 相關的紙本正本資料。</p>
        </div>
        <div className="card" style={{ borderTop: '3px solid var(--accent-warning)', background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-warning)', border: 'none' }}>營管部 / 庶務</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>Anita</h3>
          <p>負責營業費紙本、報價單用印、折讓單留存以及安排退換貨物流。</p>
        </div>
        <div className="card" style={{ borderTop: '3px solid #8b5cf6', background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: 'none' }}>行銷部審核</span>
          <h3 style={{ marginTop: 'var(--space-3)' }}>PM / Jerry / Bernie</h3>
          <p>行銷審會流程與部分控貨出貨的中繼審核站。</p>
        </div>
      </div>
    </div>
  );
};

export default Roles;
