import { Route } from '@vaadin/router';
import './views/grocery/grocery-view';
import './views/flight/flight-view';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: '',
    icon: '',
    title: '',
  },
  {
    path: 'grocery',
    component: 'grocery-view',
    icon: 'la la-list-alt',
    title: 'Grocery Menu',
  },
  {
    path: 'flight',
    component: 'flight-view',
    icon: 'la la-list-alt',
    title: 'Flight Menu',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
