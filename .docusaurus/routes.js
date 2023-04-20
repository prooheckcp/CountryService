import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/InventorySystem/__docusaurus/debug',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug', '183'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/config',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/config', '1a1'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/content',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/content', '467'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/globalData',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/globalData', 'cde'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/metadata',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/metadata', '307'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/registry',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/registry', 'abc'),
    exact: true
  },
  {
    path: '/InventorySystem/__docusaurus/debug/routes',
    component: ComponentCreator('/InventorySystem/__docusaurus/debug/routes', '336'),
    exact: true
  },
  {
    path: '/InventorySystem/api/',
    component: ComponentCreator('/InventorySystem/api/', '2d3'),
    exact: true
  },
  {
    path: '/InventorySystem/api/ChannelController',
    component: ComponentCreator('/InventorySystem/api/ChannelController', '225'),
    exact: true
  },
  {
    path: '/InventorySystem/api/ChannelService',
    component: ComponentCreator('/InventorySystem/api/ChannelService', '3b8'),
    exact: true
  },
  {
    path: '/InventorySystem/api/InventoryController',
    component: ComponentCreator('/InventorySystem/api/InventoryController', '17a'),
    exact: true
  },
  {
    path: '/InventorySystem/api/InventoryService',
    component: ComponentCreator('/InventorySystem/api/InventoryService', '49c'),
    exact: true
  },
  {
    path: '/InventorySystem/api/ItemLifeCycle',
    component: ComponentCreator('/InventorySystem/api/ItemLifeCycle', 'd89'),
    exact: true
  },
  {
    path: '/InventorySystem/docs',
    component: ComponentCreator('/InventorySystem/docs', '955'),
    routes: [
      {
        path: '/InventorySystem/docs/About',
        component: ComponentCreator('/InventorySystem/docs/About', '8d8'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/InventorySystem/docs/Installation',
        component: ComponentCreator('/InventorySystem/docs/Installation', 'df2'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/InventorySystem/docs/Tutorial/Start',
        component: ComponentCreator('/InventorySystem/docs/Tutorial/Start', 'fa9'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '/InventorySystem/',
    component: ComponentCreator('/InventorySystem/', 'bd6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
