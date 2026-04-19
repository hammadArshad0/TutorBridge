import React from 'react';

const levelClass = { 1: 'tb-heading--1', 2: 'tb-heading--2', 3: 'tb-heading--3' };

/**
 * Semantic heading with consistent scale and optional Lucide icon.
 * @param {1|2|3} level
 * @param {import('lucide-react').LucideIcon} [icon] — e.g. import { BookOpen } from 'lucide-react'
 * @param {number} [iconSize=20] — 16–24 recommended
 * @param {'default'|'onDark'|'inherit'} [tone]
 */
export default function Heading({
  level = 2,
  children,
  icon: Icon,
  iconSize = 20,
  center = false,
  tightBottom = false,
  tone = 'default',
  className = '',
  style,
  as,
  ...rest
}) {
  const safe = level >= 1 && level <= 3 ? level : 2;
  const Tag = as || `h${safe}`;
  const toneClass =
    tone === 'onDark' ? 'tb-heading--on-dark' : tone === 'inherit' ? 'tb-heading--inherit' : 'tb-heading--default';

  const classes = [
    'tb-heading',
    levelClass[safe],
    center && 'tb-heading--center',
    tightBottom && 'tb-heading--tight-bottom',
    toneClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconEl =
    Icon != null ? (
      <Icon className="tb-heading__icon" size={iconSize} strokeWidth={2} aria-hidden />
    ) : null;

  return (
    <Tag className={classes} style={style} {...rest}>
      {iconEl ? (
        <span className="tb-heading__row">
          {iconEl}
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}
