import { useParams } from 'react-router-dom';
import { PROCESS_DATA } from '../data/registry';
import { processes } from '../docs';

const ProcessDetail = () => {
  const { id } = useParams();
  const data = PROCESS_DATA[id];
  const ContentComponent = processes[id];

  if (!data) return <div>Process not found</div>;

  return (
    <div className="process-view">
      <h1>{data.title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>{data.subtitle}</p>
      {ContentComponent ? <ContentComponent /> : <div>Process content not found</div>}
    </div>
  );
};

export default ProcessDetail;
