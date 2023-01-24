var classless = new URLSearchParams(window.location.search).get('classless');
if (classless) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = classless;
    document.head.appendChild(link);
}

const STYLE = /*CSS*/ `
* {
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
`;

const style = document.createElement('style');
style.innerHTML = STYLE;

document.head.appendChild(style);
