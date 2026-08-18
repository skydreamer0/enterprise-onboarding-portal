const StepProgress = ({ steps, currentStep = 0, orientation = 'vertical' }) => {
  const isVertical = orientation === 'vertical';

  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: isVertical ? 0 : 'var(--space-4)',
    position: 'relative',
  };

  const stepStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'row' : 'column',
    alignItems: isVertical ? 'flex-start' : 'flex-start',
    gap: 'var(--space-4)',
    flex: 1,
    position: 'relative',
  };

  const isDone = (index) => index <= currentStep;

  const circleStyle = (index) => ({
    width: '22px',
    height: '22px',
    borderRadius: 'var(--radius-full)',
    backgroundColor: isDone(index) ? 'var(--accent-primary)' : 'var(--surface-default)',
    border: `1px solid ${isDone(index) ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: 500,
    color: isDone(index) ? 'var(--text-on-accent)' : 'var(--text-tertiary)',
    zIndex: 2,
    flex: 'none',
  });

  const lineStyle = (index) => ({
    position: 'absolute',
    backgroundColor: index < currentStep ? 'var(--accent-primary)' : 'var(--border-color)',
    zIndex: 1,
    ...(isVertical
      ? { left: '11px', top: '22px', width: '1px', height: 'calc(100% - 22px)' }
      : { top: '11px', left: '22px', height: '1px', width: 'calc(100% + var(--space-4) - 22px)' }),
  });

  return (
    <div style={containerStyle}>
      {steps.map((step, index) => (
        <div key={index} style={stepStyle}>
          <div style={{ position: 'relative', alignSelf: 'stretch', display: 'flex' }}>
            <div style={circleStyle(index)}>{index + 1}</div>
            {index < steps.length - 1 && <div style={lineStyle(index)} />}
          </div>
          <div style={{ paddingBottom: isVertical ? 'var(--space-5)' : 0, minWidth: 0 }}>
            <h4
              style={{
                margin: 0,
                fontSize: 'var(--font-sm)',
                fontWeight: 500,
                lineHeight: 1.6,
                color: isDone(index) ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              {step.title}
            </h4>
            {step.description && (
              <p style={{ margin: '2px 0 0 0', fontSize: 'var(--font-xs)', color: 'var(--text-tertiary)' }}>
                {step.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
