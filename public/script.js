// getting date and hours
const today = new Date();
const hours = today.getUTCHours();

//getting the container
const principalContainer = document.querySelector('.principal-container');

const toggleLightDarkTheme = DOMElement => {
  const isInLightTheme = DOMElement.contains('light-theme');
  const isInDarkTheme = DOMElement.contains('dark-theme');

  if(isInLightTheme)
    principalContainer.classList.replace( 'light-theme', 'dark-theme' );
  else if(isInDarkTheme)
    principalContainer.classList.replace( 'dark-theme', 'light-theme' );
}

if(principalContainer && hours >= 17 && hours <= 23 && hours >= 0 && hours <= 7) {
  //setting dark theme if nessesary
  toggleLightDarkTheme();
}