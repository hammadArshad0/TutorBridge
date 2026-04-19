import React from 'react';

/**
 * Supporting line under a heading — uses theme muted colour.
 */
export default function SubHeading({
  children,
  center = false,
  narrow = false,
  tone = 'default',
  className = '',
  style,
  as: Tag = 'p',
  ...rest
}) {
  const classes = [
    'tb-subheading',
    center && 'tb-subheading--center',
    narrow && 'tb-subheading--narrow',
    tone === 'onDark' && 'tb-subheading--on-dark',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}
