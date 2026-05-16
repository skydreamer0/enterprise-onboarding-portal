import { useParams } from 'react-router-dom';
import { SKILL_DATA } from '../data/registry';
import { SKILL_CONTENT } from '../data/content/skills';

const SkillDetail = () => {
  const { id } = useParams();
  const data = SKILL_DATA[id];

  if (!data) return <div>Skill not found</div>;

  const renderContent = () => {
    return SKILL_CONTENT[id] || <div>Skill content not found</div>;
  };

  return (
    <div className="process-view">
      <h1>{data.title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>{data.subtitle}</p>
      {renderContent()}
    </div>
  );
};

export default SkillDetail;
