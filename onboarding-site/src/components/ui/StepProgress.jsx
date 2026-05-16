import React from 'react';

const StepProgress = ({ steps, currentStep = 0, orientation = 'vertical' }) => {
  const isVertical = orientation === 'vertical';

  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: 'var(--space-4)',
    position: 'relative',
    padding: 'var(--space-2)',
  };

  const stepStyle = (index) => ({
    display: 'flex',
    flexDirection: isVertical ? 'row' : 'column',
    alignItems: 'center',
    gap: 'var(--space-4)',
    flex: 1,
    position: 'relative',
  });

  const circleStyle = (index) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: index <= currentStep ? 'var(--accent-primary)' : 'var(--bg-surface-hover)',
    border: `2px solid ${index <= currentStep ? 'var(--accent-primary)' : 'var(--border-color)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'var(--font-xs)',
    fontWeight: 'bold',
    color: index <= currentStep ? 'var(--text-on-accent)' : 'var(--text-tertiary)',
    zIndex: 2,
    transition: 'all 0.3s ease',
  });

  const lineStyle = (index) => ({
    position: 'absolute',
    backgroundColor: index < currentStep ? 'var(--accent-primary)' : 'var(--border-color)',
    zIndex: 1,
    transition: 'all 0.3s ease',
    ...(isVertical 
      ? {
          left: '13px',
          top: '24px',
          width: '2px',
          height: 'calc(100% + var(--space-4) - 24px)',
        } 
      : {
          top: '13px',
          left: '24px',
          height: '2px',
          width: 'calc(100% + var(--space-4) - 24px)',
        }
    ),
  });

  return (
    <div style={containerStyle}>
      {steps.map((step, index) => (
        <div key={index} style={stepStyle(index)}>
          <div style={{ position: 'relative' }}>
            <div style={circleStyle(index)}>
              {index + 1}
            </div>
            {index < steps.length - 1 && <div style={lineStyle(index)} />}
          </div>
          <div style={{ paddingBottom: isVertical ? 'var(--space-6)' : 0 }}>
            <h4 style={{ margin: 0, fontSize: 'var(--font-sm)', color: index <= currentStep ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
              {step.title}
            </h4>
            {step.description && (
              <p style={{ margin: 'var(--space-1) 0 0 0', fontSize: 'var(--font-xs)', color: 'var(--text-tertiary)' }}>
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
