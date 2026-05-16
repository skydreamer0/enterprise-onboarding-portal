import { useParams } from 'react-router-dom';
import { PROCESS_DATA } from '../data/registry';
import { PROCESS_CONTENT } from '../data/content/processes';

const ProcessDetail = () => {
  const { id } = useParams();
  const data = PROCESS_DATA[id];

  if (!data) return <div>Process not found</div>;

  const renderContent = () => {
    return PROCESS_CONTENT[id] || <div>Process content not found</div>;
  };

  return (
    <div className="process-view">
      <h1>{data.title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>{data.subtitle}</p>
      {renderContent()}
    </div>
  );
};

export default ProcessDetail;
