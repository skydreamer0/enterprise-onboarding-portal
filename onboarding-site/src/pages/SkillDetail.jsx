import { useParams } from 'react-router-dom';
import { SKILL_DATA } from '../data/registry';
import { skills } from '../docs';

const SkillDetail = () => {
  const { id } = useParams();
  const data = SKILL_DATA[id];
  const ContentComponent = skills[id];

  if (!data) return <div>Skill not found</div>;

  return (
    <div className="process-view">
      <h1>{data.title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>{data.subtitle}</p>
      {ContentComponent ? <ContentComponent /> : <div>Skill content not found</div>}
    </div>
  );
};

export default SkillDetail;
