import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StepProgress from '../../components/ui/StepProgress';

export const PROCESS_CONTENT = {
  '1': (
    <>
      <Card style={{ marginTop: 'var(--space-8)' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>📌 流程步驟</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 準備資料' },
            { title: '送 直屬主管 審核' },
            { title: '送 PM 審核' },
            { title: '送 Jerry / Bernie 審核' },
            { title: '送 Champion 最終確認' },
          ]}
          currentStep={4}
        />
      </Card>

      <div className="grid-cards">
        <Card style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <h3 style={{ color: 'var(--accent-warning)', marginBottom: 'var(--space-4)' }}>⚠️ 紙本資料處理</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>付款憑單與相關單據掃描後，先提供給主管。</li>
            <li><strong>正本資料務必交給 Joanne</strong> (行銷部)。</li>
          </ul>
        </Card>
      </div>
    </>
  ),
  '2': (
    <>
      <Card style={{ marginTop: 'var(--space-8)' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>📌 流程步驟</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 準備資料' },
            { title: '送 直屬主管 審核' },
            { title: '送 Champion 最終確認' },
          ]}
          currentStep={2}
        />
      </Card>

      <div className="grid-cards">
        <Card style={{ border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <h3 style={{ color: 'var(--accent-danger)', marginBottom: 'var(--space-4)' }}>🔔 注意事項</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
            <li>需先向主管確認欲申請的「費審編號」。</li>
          </ul>
        </Card>
        <Card style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <h3 style={{ color: 'var(--accent-warning)', marginBottom: 'var(--space-4)' }}>⚠️ 憑單與紙本處理</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>付款憑單與單據掃描後，提供給 主管 與 Champion。</li>
            <li><strong>紙本正本請交給 Anita</strong>。</li>
          </ul>
        </Card>
      </div>
    </>
  ),
  '3': (
    <div className="grid-cards">
      <Card>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>情境一：提出報價需求</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 提出需求取得授權' },
            { title: '填寫 報價單 & 用印申請單' },
            { title: '送 直屬主管 審核' },
            { title: '送 Champion 審核' },
            { title: '交由 Anita 協助用印' },
          ]}
          currentStep={4}
        />
      </Card>

      <Card>
        <h3 style={{ color: 'var(--accent-success)', marginBottom: 'var(--space-4)' }}>情境二：院方接受價格後</h3>
        <StepProgress 
          steps={[
            { title: '需於公司系統 建立價格' },
            { title: '填寫 特惠價格卡' },
            { title: '送 直屬主管 審核' },
            { title: '送 Champion 審核' },
          ]}
          currentStep={3}
        />
      </Card>
    </div>
  ),
  '4': (
    <div className="grid-cards">
      <Card>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>折讓單處理</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 填寫折讓單' },
            { title: '交由 醫院採購 蓋章' },
            { title: '收回回執聯' },
            { title: '交給 Anita 留存' },
          ]}
          currentStep={3}
        />
      </Card>

      <Card>
        <h3 style={{ color: 'var(--accent-success)', marginBottom: 'var(--space-4)' }}>報核表處理</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 填寫報核表' },
            { title: '附上 折讓單掃描檔' },
            { title: '送 直屬主管 審核' },
            { title: '送 Champion 審核' },
            { title: '完成 用印 流程' },
          ]}
          currentStep={4}
        />
      </Card>
    </div>
  ),
  '5': (
    <Card style={{ marginTop: 'var(--space-8)' }}>
      <h3 style={{ marginBottom: 'var(--space-4)' }}>流程步驟</h3>
      <StepProgress 
        steps={[
          { title: 'PSR 提出退換貨需求' },
          { title: '取得授權後，填寫 退換貨處理單' },
          { title: '送 直屬主管 審核' },
          { title: '送 Champion 審核' },
          { title: '由 Anita 安排物流退換貨' },
        ]}
        currentStep={4}
      />
    </Card>
  ),
  '6': (
    <div className="grid-cards">
      <Card>
        <h3 style={{ marginBottom: 'var(--space-4)' }}>流程步驟</h3>
        <StepProgress 
          steps={[
            { title: '先詢問院方 庫存量' },
            { title: '評估是否需要出貨' },
            { title: '送 直屬主管 審核' },
            { title: '視品項與狀況，送 Champion 或 PM 確認' },
          ]}
          currentStep={3}
        />
      </Card>

      <Card style={{ border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
        <h3 style={{ color: 'var(--accent-danger)' }}>⏰ 時效性提醒</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
          <li style={{ fontSize: 'var(--font-lg)', color: 'var(--text-primary)', marginTop: 'var(--space-2)' }}>
            <strong>須於當日 15:00 前提出！</strong>
          </li>
          <li style={{ marginTop: 'var(--space-2)' }}>逾時將影響出貨進度，請務必掌握時間。</li>
        </ul>
      </Card>
    </div>
  ),
  '7': (
    <>
      <Card style={{ marginTop: 'var(--space-8)' }}>
        <h3 style={{ marginBottom: 'var(--space-4)' }}>流程步驟</h3>
        <StepProgress 
          steps={[
            { title: 'PSR 完成計畫撰寫' },
            { title: '提供給 直屬主管' },
            { title: '同步副本給 Champion' },
          ]}
          currentStep={2}
        />
      </Card>

      <div className="grid-cards">
        <Card style={{ border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
          <h3 style={{ color: 'var(--accent-danger)' }}>⏰ 時效性提醒</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
            <li style={{ fontSize: 'var(--font-lg)', color: 'var(--text-primary)', marginTop: 'var(--space-2)' }}>
              <strong>最晚需於 Coaching 前一週完成！</strong>
            </li>
          </ul>
        </Card>
      </div>
    </>
  ),
  '8': (
    <div className="grid-cards">
      <Card style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)' }}>
        <h3 style={{ color: 'var(--accent-warning)' }}>⏰ 時效性提醒</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
          <li style={{ fontSize: 'var(--font-lg)', color: 'var(--text-primary)', marginTop: 'var(--space-2)' }}>
            <strong>每個月申報一次！</strong>
          </li>
          <li style={{ marginTop: 'var(--space-2)' }}>請注意各項單據與發票的整理。</li>
        </ul>
      </Card>
    </div>
  ),
  '9': (
    <div className="grid-cards">
      <Card style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)' }}>
        <h3 style={{ color: 'var(--accent-warning)' }}>⏰ 時效性提醒</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
          <li style={{ fontSize: 'var(--font-lg)', color: 'var(--text-primary)', marginTop: 'var(--space-2)' }}>
            <strong>每個月執行一次！</strong>
          </li>
          <li style={{ marginTop: 'var(--space-2)' }}>準備並回顧當月業績、重要指標與下個月預估。</li>
        </ul>
      </Card>
    </div>
  ),
  '10': (
    <div className="grid-cards">
      <Card style={{ border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
        <h3 style={{ color: 'var(--accent-danger)' }}>⏰ 時效性提醒</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', margin: 0 }}>
          <li style={{ fontSize: 'var(--font-lg)', color: 'var(--text-primary)', marginTop: 'var(--space-2)' }}>
            <strong>每個禮拜五要交！</strong>
          </li>
          <li style={{ marginTop: 'var(--space-2)' }}>務必於週五下班前完成提交。</li>
        </ul>
      </Card>
    </div>
  ),
};
