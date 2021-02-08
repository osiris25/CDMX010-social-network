/* eslint-disable no-use-before-define */
// Este es el punto de entrada de tu aplicacion

import { home } from './home.js';
import { login } from './login.js';
import { perfil } from './perfil.js';
import { account } from './account.js';

// Router
const routes = {

  '/': home,
  '/login': login,
  '/account': account,
  '/perfil': perfil,
};

console.log(routes);
const rootDiv = document.getElementById('root');

rootDiv.innerHTML = routes[window.location.pathname];

// Indicamos la ruta a la que queremos acceder y la renderizamos
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

const loginLink = document.getElementById('log');
const loginPathName = '/login';
const accountLink = document.getElementById('acc');
const accountPathName = '/account';
const homeLink = document.getElementById('hom');
const homePathName = '/';
const perfilLink = document.getElementById('per');
const perfilPathName = '/perfil';

getRouter(loginLink, loginPathName);
getRouter(accountLink, accountPathName);
getRouter(homeLink, homePathName);
getRouter(perfilLink, perfilPathName);

function getRouter(linkId, PathName) {
  linkId.addEventListener('click', () => {
    onNavigate(PathName); return false;
  });
}

// NAVBAR

const desplegar = document.getElementById('menu');

desplegar.onclick = function () {
  const navbar = document.getElementById('nav');
  navbar.classList.toggle('show');
};
