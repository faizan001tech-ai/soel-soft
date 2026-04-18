import React from 'react';
import './Badge.css';

/**
 * Badge Component - Design System
 * 
 * Variants: primary, secondary, success, error, warning, info
 * Sizes: sm, md (default), lg
 */

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  pulse = false,
  className = '',
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = `badge-${variant}`;
  const sizeClass = size !== 'md' ? `badge-${size}` : '';
  const dotClass = dot ? 'badge-dot' : '';
  const pulseClass = pulse ? 'badge-pulse' : '';

  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    dotClass,
    pulseClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
