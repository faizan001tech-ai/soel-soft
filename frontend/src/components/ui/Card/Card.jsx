import React from 'react';
import './Card.css';

/**
 * Card Component - Design System
 * 
 * Variants: default, elevated, glass, bordered
 */

const Card = ({
  children,
  variant = 'default',
  interactive = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClass = 'card';
  const variantClass = variant !== 'default' ? `card-${variant}` : '';
  const interactiveClass = interactive ? 'card-interactive' : '';

  const classes = [
    baseClass,
    variantClass,
    interactiveClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// Sub-components for Card structure
Card.Image = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`card-image ${className}`} />
);

Card.Body = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);

Card.Text = ({ children, className = '' }) => (
  <p className={`card-text ${className}`}>{children}</p>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);

export default Card;
