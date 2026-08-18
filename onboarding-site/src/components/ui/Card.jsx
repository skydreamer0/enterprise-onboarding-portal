const Card = ({ children, className = '', hoverable = true, style = {}, ...props }) => {
  const isLinked = Boolean(props.onClick || props.href);

  return (
    <div
      className={`card ${hoverable ? 'hoverable' : ''} ${isLinked ? 'linked' : ''} ${className}`}
      style={{ display: 'flex', flexDirection: 'column', ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
