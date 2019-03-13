// getting date and hours
const today = new Date();
const hours = today.getUTCHours();

//getting the container
const principalContainer = document.querySelector('.principal-container');

const toggleLightDarkTheme = DOMElement => {
  const isInLightTheme = DOMElement.classList.contains('light-theme');
  const isInDarkTheme = DOMElement.classList.contains('dark-theme');

  if(isInLightTheme)
    DOMElement.classList.replace( 'light-theme', 'dark-theme' );
  else if(isInDarkTheme)
    DOMElement.classList.replace( 'dark-theme', 'light-theme' );
}

if(principalContainer && (hours >= 17 && hours <= 23 || hours >= 0 && hours <= 7)) {
  //setting dark theme if nessesary
  toggleLightDarkTheme(principalContainer);
}