export const menuItemsData = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Components',
      url: '/components',
      upIcon: '',
      downChevron: 
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.84615 6L0 0H12L5.84615 6Z" fill="white"/>
      </svg>,
      submenu: [
        {
            title: 'Navigation Bars',
            url: 'navigation-bars',
        },
        {
            title: 'Hero Component',
            url: 'hero-components',
        },
        {
            title: 'Split Components',
            url: 'split-components',
        },
        {
            title: 'Buttons',
            url: 'buttons',
        },
        {
            title: 'Forms',
            url: 'forms',
        },
        {
            title: 'Modals',
            url: 'modals'
        },
      ]
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
    },
    {
      title: 'Login',
      url: '/login',
    },
    {
      title: 
      <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.28621 13.9846C-0.972573 11.222 -0.41915 0 9 0C18.5235 0 18.3195 10.038 13.8142 13.9776C13.6355 14.1338 13.5771 14.3932 13.6825 14.6059C15.1468 17.5618 16.2935 19.7406 17.1412 21.2893C17.9058 22.6862 16.8799 24.5 15.2875 24.5H2.17433C0.702648 24.5 -0.241776 22.9776 0.458587 21.6833C1.39218 19.9579 2.75915 17.5469 4.5166 14.7545C4.68505 14.4868 4.56618 14.1317 4.28621 13.9846Z" fill="white"/>
      </svg>,
      url: '/login',
    }
  ];