import { home } from './home.js';
import { login, loginWithMail } from './login.js';
import { createPost, perfil, reloadPost } from './perfil.js';
import { account, createAccount } from './account.js';
import { navLinkVisibilityLogin, navLinkVisibilityWithoutLogin } from './NavdisplayVisibilityFunctions.js';

//OBJETO QUE TIENE LOS PATHNAMES DE LAS SECCIONES//
export const routes = {
    '/home': home,
    '/': login,
    '/account': account,
    '/perfil': perfil
};

//DIV DONDE SE RENDARIZAN TODAS LAS SECCIONES//
const rootDiv = document.getElementById('root');

//EVENTO CLICK QUE DEFINE EL PATHNAME QUE SE RENDERIZARÁ //
export function getRouter(linkId,PathName) {
    linkId.addEventListener('click', () => {
        onNavigate(PathName); return false;
    })
    }

//FUNCIÓN QUE RENDERIZA EL PATHNAME INDICADO
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML= routes[pathname];
    if (pathname=='/') {
        console.log('Ingresar')
        loginWithMail();
        navLinkVisibilityWithoutLogin();
    } else if (pathname=='/account') {
        console.log('Registrarse');
        createAccount();
        navLinkVisibilityWithoutLogin();
    } else if(pathname=='/home') {
        navLinkVisibilityLogin();
        console.log('Home');
        createPost();
        reloadPost();
        
    }else if(pathname=='/perfil') {
        console.log('Perfil');        
        navLinkVisibilityLogin();
        createPost();
        reloadPost();
    }
};

navLinkVisibilityLogin()