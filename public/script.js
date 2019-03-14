(() => {
  //getting some elements
  const principalContainer = document.querySelector('.principal-container');
  const header = document.querySelector('.header');
  const headerToggleSidebarButton = document.querySelector('.header-toggle-sidebar-button');
  const sidebarButton = document.querySelector('.sidebar-button');
  const sidebar = document.querySelector('.sidebar');

  const toggleableThemeElements = [
    principalContainer,
    sidebar
  ];

  // some functions
  const toggleLightDarkTheme = () => {
    toggleableThemeElements.forEach(DOMElement => {
      const isInLightTheme = DOMElement.classList.contains('light-theme');
      const isInDarkTheme = DOMElement.classList.contains('dark-theme');

      if (isInLightTheme)
        DOMElement.classList.replace('light-theme', 'dark-theme');
      else if (isInDarkTheme)
        DOMElement.classList.replace('dark-theme', 'light-theme');
    });
  }

  const openSidebar = () => {
    console.log('openSidebar')
    const isVisible = sidebar.classList.contains('sidebar-visible');
    if (isVisible) {
      console.error('Sidebar already open');
      return;
    }
    sidebar.classList.replace('sidebar-hidden', 'sidebar-visible');
  }

  const closeSidebar = () => {
    console.log('closeSidebar')
    const isVisible = sidebar.classList.contains('sidebar-visible');
    if (!isVisible) {
      console.error('Sidebar already closed');
      return;
    }
    sidebar.classList.replace('sidebar-visible', 'sidebar-hidden');
  }

  const toggleSidebar = () => {
    const isVisible = sidebar.classList.contains('sidebar-visible');

    if (isVisible)
      closeSidebar();
    else
      openSidebar();
  }

  // getting some info
  const today = new Date();
  const hours = today.getUTCHours();
  const darkHours = hours >= 17 && hours <= 23 || hours >= 0 && hours <= 7;

  //adding some listeners
  if (headerToggleSidebarButton) {
    headerToggleSidebarButton.addEventListener('click', openSidebar);
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