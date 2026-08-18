import { useLocation, useParams } from 'react-router-dom';
import { PROCESS_DATA } from '../data/registry';
import { processes } from '../docs';
import PageHeader from '../components/ui/PageHeader';
import { getNavContext } from '../utils/nav';

const ProcessDetail = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const data = PROCESS_DATA[id];
  const ContentComponent = processes[id];
  const { groupTitle } = getNavContext(pathname);

  if (!data) return <p>找不到這份流程文件。</p>;

  return (
    <article>
      <PageHeader
        eyebrow={groupTitle || '行政流程'}
        title={data.title}
        lead={data.subtitle}
        meta={[`文件編號 PROC-${String(id).padStart(2, '0')}`]}
      />
      <div className="content-body prose">
        {ContentComponent ? <ContentComponent /> : <p>此流程的內容尚未建立。</p>}
      </div>
    </article>
  );
};

export default ProcessDetail;
