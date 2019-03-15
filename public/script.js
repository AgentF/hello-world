//Immediately-Invoked-Function-Expression
(() => {
  // DOM elements
  const principalContainer = document.querySelector('.principal-container');
  const header = document.querySelector('.header');
  const headerToggleSidebarButton = document.querySelector('.header-toggle-sidebar-button');
  const sidebarButton = document.querySelector('.sidebar-button');
  const sidebar = document.querySelector('.sidebar');
  const toggleableThemeElements = [
    principalContainer,
    sidebar,
  ];

  // info
  const today = new Date();
  const hours = today.getUTCHours();
  const darkHours = hours >= 17 && hours <= 23 || hours >= 0 && hours <= 7;
  const themes = [
    'light-theme',
    'dark-theme',
  ];
  const cards = [
    {
      title: 'Thoughts',
      icon: 'bubble_chart',
    },
    {
      title: 'Inspiration',
      icon: 'local_florist',
    },
    {
      title: 'Desings',
      icon: 'web',
    },
    {
      title: 'Front-End',
      icon: 'laptop',
    },
    {
      title: 'Back-End',
      icon: 'developer_board',
    },
    {
      title: 'DataBase',
      icon: 'storage',
    },
    {
      title: 'APIs',
      icon: 'devices_other',
    },
  ];
  const cardsString = cards.reduce((accumulator, { title, icon }) => accumulator += 
    `<div class="principal-container-card">
      <div class="principal-container-card-header">
        <i class="material-icons">${icon}</i>
      </div>
      <div class="principal-container-card-footer">
        ${title}
        <i class="material-icons">more_vert</i>
      </div>
    </div>`
  , '');
  principalContainer.innerHTML = cardsString;
  // methods
  const getTheme = (DOMElement) => {
    let output = false;
    themes.forEach(theme => {
      if (DOMElement.classList.contains(theme))
        output = theme;
    });
    if (output)
      return output;
    else
      console.error('No theme found in: ', DOMElement.className);
  }

  const isSidebarVisible = () => sidebar.classList.contains('sidebar-visible');

  const toggleLightDarkTheme = () => {
    toggleableThemeElements.forEach(DOMElement => {
      const theme = getTheme(DOMElement);
      if (theme === 'light-theme')
        DOMElement.classList.replace('light-theme', 'dark-theme');
      else if (theme === 'dark-theme')
        DOMElement.classList.replace('dark-theme', 'light-theme');
    });
  }

  const openSidebar = () => {
    if (isSidebarVisible()) {
      console.error('Sidebar already open');
      return;
    }
    sidebar.classList.replace('sidebar-hidden', 'sidebar-visible');
  }

  const closeSidebar = () => {
    if (!isSidebarVisible()) {
      console.error('Sidebar already closed');
      return;
    }
    sidebar.classList.replace('sidebar-visible', 'sidebar-hidden');
  }

  const toggleSidebar = () => {
    if (isSidebarVisible())
      closeSidebar();
    else
      openSidebar();
  }

  //listeners
  if (headerToggleSidebarButton) {
    headerToggleSidebarButton.addEventListener('click', toggleSidebar);
  } else {
    console.error('Sidebar Button not found');
  }
  if (header) {
    header.addEventListener('click', e => {
      console.log({
        target: e.target,
        classList: e.target.classList,
      })
      if (
        !e.target.classList.contains('header-toggle-sidebar-button') &&
        !e.target.classList.contains('material-icons')
      )
        closeSidebar();
    });
  } else {
    console.error('Header not found');
  }
  if (sidebarButton) {
    sidebarButton.addEventListener('click', toggleLightDarkTheme);
  } else {
    console.error('Sidebar Button not found');
  }
  if (principalContainer) {
    principalContainer.addEventListener('click', closeSidebar);
    if (darkHours) {
      //setting dark theme if nessesary
      toggleLightDarkTheme();
    }
  } else {
    console.error('Principal Container not found');
  }
})()