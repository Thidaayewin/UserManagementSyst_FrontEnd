import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'USER MANAGEMENT',
    path: '/usermangement',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/usermangement/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Roles',
        path: '/usermangement/roles',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
