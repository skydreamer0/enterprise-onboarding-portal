import { useLocation, useParams } from 'react-router-dom';
import { SKILL_DATA } from '../data/registry';
import { skills } from '../docs';
import PageHeader from '../components/ui/PageHeader';
import { getNavContext } from '../utils/nav';

const SkillDetail = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const data = SKILL_DATA[id];
  const ContentComponent = skills[id];
  const { groupTitle } = getNavContext(pathname);

  if (!data) return <p>找不到這份心法文件。</p>;

  return (
    <article>
      <PageHeader
        eyebrow={groupTitle || '業務心法'}
        title={data.title}
        lead={data.subtitle}
        meta={[`文件編號 SKILL-${String(id).padStart(2, '0')}`]}
      />
      <div className="content-body prose">
        {ContentComponent ? <ContentComponent /> : <p>此心法的內容尚未建立。</p>}
      </div>
    </article>
  );
};

export default SkillDetail;
