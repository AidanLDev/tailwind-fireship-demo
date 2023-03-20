import React from 'react';

export default function SideBarIcon({ icon, text = 'tooltip' }) {
  return (
    <div className='sidebar-icon group'> {/* Groups allow you to target child elements */}
      {icon} <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  );
}
