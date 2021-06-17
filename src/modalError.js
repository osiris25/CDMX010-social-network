// DEFINIMOS LOS TEMPLATES DE LOS MODALES QUE VAMOS A NECESITAR
export const ErrorLoginMail = `<p class="close" id="close">X</p>
      <img src="./images/denided.svg" alt="">
      <div class="modal-textos" >
        <h2>¡Correo o contraseña inválida, verificalos!</h2>
        <p> Si aún no formas parte de nuestra comunidad, registrate <a href="#" id="otherUser">Aquí</a></p>        
      </div>`;

export const ErrorLoginFacebook = `<p class="close" id="close">X</p>
      <img src="./images/denided.svg" alt="">
      <div class="modal-textos" >
        <h2>¡Error al iniciar con Facebook!</h2>       
      </div>`;

export const ErrorLoginGoogle = `<p class="close" id="close">X</p>
      <img src="./images/denided.svg" alt="">
      <div class="modal-textos" >
        <h2>¡Error al iniciar con Google!</h2>       
      </div>`;

export const ErrorLoginGithub = ` <p class="close" id="close">X</p>
      <img src="./images/denided.svg" alt="">
      <div class="modal-textos" >
      <h2>¡Error al iniciar con Github!</h2>       
      </div>`;

export const ErrorAccount = `<p class="close" id="close">X</p>
      <img src="./images/denided.svg" alt="">
      <div class="modal-textos" >
            <h2>¡Error en el registro!</h2>
            <p>Este correo electrónico es inválido o ya fue registrado antes.</p>
            <p>Intenta <a href="#" id="modalErrorLogin-link">iniciar sesión</a> o <a href="#" id="modalErrorAccount-link">resgístrate</a> con otro correo electrónico</p>        
      </div>`;

export const SuccessAccount = `<p class="close" id="close">X</p>
      <img src="./images/woman.svg" alt="">
      <div class="modal-textos" >
            <h2>¡Registro exitoso!</h2>
            <p>Bienvenida a GirlTechSOS</p>                
      </div>`;

export const confirmDelete = `<p class="close" id="close">X</p>
<img src="./images/confirmchanges.svg" alt="">
<div class="modal-textos" >
      <h2>¿Deseas eliminar la publicación?</h2>
      <button id="btnAcept" class="btnAcept">Aceptar</button>               
</div>`;

export const emailVerificationText = `<p class="close" id="close">X</p>
      <img src="./images/emailVerification.jpg" alt="">
      <div class="modal-textos" >
            <h2>Verifica tu email para poder ingresar</h2>
            <p>Busca el correo de verificación en tu correo electrónico</p>                
      </div>`;
