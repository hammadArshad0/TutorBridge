import React from 'react';
import { C } from '../data';

export default function Logo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laurel Left */}
      <ellipse cx="22" cy="48" rx="6" ry="3.5" transform="rotate(-18 22 48)" fill={C.gold}/>
      <ellipse cx="18" cy="62" rx="6" ry="3.5" fill={C.gold}/>
      <ellipse cx="20" cy="76" rx="6" ry="3.5" transform="rotate(18 20 76)" fill={C.gold}/>
      <ellipse cx="28" cy="88" rx="6" ry="3.5" transform="rotate(36 28 88)" fill={C.gold}/>
      <ellipse cx="40" cy="97" rx="6" ry="3.5" transform="rotate(54 40 97)" fill={C.gold}/>
      <ellipse cx="30" cy="37" rx="6" ry="3.5" transform="rotate(-36 30 37)" fill={C.gold}/>
      <ellipse cx="42" cy="27" rx="6" ry="3.5" transform="rotate(-54 42 27)" fill={C.gold}/>
      {/* Laurel Right */}
      <ellipse cx="98" cy="48" rx="6" ry="3.5" transform="rotate(18 98 48)" fill={C.gold}/>
      <ellipse cx="102" cy="62" rx="6" ry="3.5" fill={C.gold}/>
      <ellipse cx="100" cy="76" rx="6" ry="3.5" transform="rotate(-18 100 76)" fill={C.gold}/>
      <ellipse cx="92" cy="88" rx="6" ry="3.5" transform="rotate(-36 92 88)" fill={C.gold}/>
      <ellipse cx="80" cy="97" rx="6" ry="3.5" transform="rotate(-54 80 97)" fill={C.gold}/>
      <ellipse cx="90" cy="37" rx="6" ry="3.5" transform="rotate(36 90 37)" fill={C.gold}/>
      <ellipse cx="78" cy="27" rx="6" ry="3.5" transform="rotate(54 78 27)" fill={C.gold}/>
      {/* Blue circle */}
      <circle cx="60" cy="58" r="28" fill={C.blue}/>
      {/* Cap base */}
      <rect x="46" y="55" width="28" height="16" rx="3" fill="white" opacity="0.95"/>
      {/* Cap top */}
      <polygon points="60,42 78,52 60,57 42,52" fill="white"/>
      {/* Tassel stem */}
      <rect x="75" y="52" width="2.5" height="10" fill={C.gold} rx="1"/>
      <circle cx="76.25" cy="63" r="2.5" fill={C.gold}/>
      {/* Tassel line */}
      <line x1="60" y1="57" x2="56" y2="57" stroke={C.gold} strokeWidth="2"/>
    </svg>
  );
}
