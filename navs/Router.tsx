const router = [
  {
    name: 'Tab',
    title: 'Tab',
    //Home和Mine都在这里
    component: require('../pages/Tabs/Index').default,
  },
  {
    name: 'Details',
    title: 'Details',
    component: require('../pages/Details').default,
  },
];
export default router;
