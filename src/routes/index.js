import { createBrowserRouter } from 'react-router-dom';
import TodoPage from '../pages/todo/TodoPage';
import AccordionPage from '../pages/accordion/AccordionPage';
import { AuthLayout, Layout } from '../pages/layout';
import { ErrorPage } from '../pages/error/error-page';
import { LoginPage, RegistrationPage, ForgotPasswordPage, ActivationPage } from '../pages/auth';
import { LogoutPage } from '../pages/logout';
import ContactsPage from '../pages/contacts/ContactsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/todo',
        element: <TodoPage />,
      },
      {
        path: '/accordion',
        element: <AccordionPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '/logout',
        element: <LogoutPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/activation',
        element: <ActivationPage />,
      },
    ],
  },
]);

// This constant introduces content of sidebar
export const routes = [
  // {
  //   type: 'header',
  //   title: 'Main Pages',
  // },
  {
    // type: 'route',
    path: '/todo',
    title: 'Todo List',
    // icon
    // routes | items | children | nested (means child routes for grouped sidebar)
  },
  {
    path: '/accordion',
    title: 'Accordion',
  },
  {
    path: '/contacts',
    title: 'Contacts',
  },
  { title: 'Logout', path: '/logout' },
  // {
  //   type: 'divider',
  // },
];
