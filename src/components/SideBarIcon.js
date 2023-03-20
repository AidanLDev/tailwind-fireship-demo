import React from 'react';

export default function SideBarIcon({ icon, text = 'tooltip' }) {
  return (
    <div className='sidebar-icon'>
      {icon} <span className='sidebar-tooltip'>{text}</span>
    </div>
  );
}
