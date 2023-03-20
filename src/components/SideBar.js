import React from 'react';
import SideBarIcon from './SideBarIcon';
import { FaFire } from 'react-icons/fa';
import { DiGithubAlt, DiReact, DiJavascript } from 'react-icons/di';
import { GiNinjaHead } from 'react-icons/gi';

export default function SideBar() {
  return (
    // Cam create custom values with top-[-23px]
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg'>
      <SideBarIcon icon={<FaFire size='28' />} />
      <SideBarIcon icon={<DiGithubAlt size='28' />} />
      <SideBarIcon icon={<GiNinjaHead size='28' />} />
      <SideBarIcon icon={<DiReact size='28' />} />
      <SideBarIcon icon={<DiJavascript size='28' />} />
    </div>
  );
}
