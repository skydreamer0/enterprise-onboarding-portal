import Button from './Button';

const DownloadItem = ({ name, url }) => {
  return (
    <li
      style={{
        padding: 'var(--space-2) 0',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-primary)' }}>{name}</span>
      <Button
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="sm"
      >
        下載
      </Button>
    </li>
  );
};

export default DownloadItem;
