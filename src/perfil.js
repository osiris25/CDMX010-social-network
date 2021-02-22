import { templatePost } from "./templatePost.js";

export const perfil =
    `<div class="flex-container">
    <div class="flex-menu">
        <div class="subject">
        <h3>GirlTechSOS</h3>
        <p class="menu1"><img class="menuIcons" src="./images/profileIcon.png"> Perfil</p>
        <p class="menu1"><img class="menuIcons" src="./images/friendsIcon.png"> Amigos</p>
        <p class="menu1"><img class="menuIcons" src="./images/favFolderIcon.png"> Favoritos</p>
        <p class="menu1"><img class="menuIcons" src="./images/helpIcon.png"> Ayuda</p>
        <p class="menu1"><img class="menuIcons" src="./images/configIcon.png"> Configuración</p>            
        <p class="menu1"><img class="menuIcons" src="./images/avatarProfile.png">Sobre GirlTechSOS</p>
        <p class="menu1"><img class="menuIcons" src="./images/exitIcon.png"> Salir</p>
        </div>
    </div>
    <div class="flex-perfil">
        <div class="container">
            <div class="imgContainer">
                <img src="./images/avatarProfile.png" class="image-perfil">
            </div>
            <div class="info-perfil">
                    <div class="userName-perfil">Nombre de usuario</div>
                    <div class="about">Información sobre el usuario</div>
            </div>
        </div>
        <div class="content">       
        <div class="post">
            <input type="text" placeholder="Nueva publicación" class="newPost" id="newPostPerfil"></input>
            <button class="enter" type"submit" id="publicar">Publicar</button>
        </div>
        <div id="postsContainer"></div>
        </div>
    </div>
    <div class="flex-noticias">
        <div class="noticias-section">
            <p class="title">Noticias</p>
            <p>Noticia 1</p>
            <img src="./images/picture.png" class="notice"> 
            <p>Noticia 2</p>
            <img src="./images/picture.png" class="notice"> 
            <p>Noticia 3</p>
            <img src="./images/picture.png" class="notice"> 
        </div> 
    </div>
</div>`

//ENVIAR LA INFORMACIÓN OBTENIDA AL FIREBASE
const savePost = (post, usermail, uid) => {
    firestore.collection('posts').doc().set({
        post,
        usermail,
        uid,
        id
    });

}
//DA EL ID A FIREBASE PARA ELIMINAR POSTS
const deletePosts = id => firestore.collection('posts').doc(id).delete();
//OBTENER LA INFORMACIÓN DESDE FIREBASE
const getPosts = () => firestore.collection('posts').get();
//OBTIENE EL DATO DEL POST DEPENDIENDO DEL ID QUE SE LE ESTE PASANDO
const getpost = (id) =>firestore.collection('posts').doc(id).get();
//ACTUALIZA EL POST
const updatePosts= (id,updatedPost)=>firestore.collection('posts').doc(id).update(updatedPost);
//PINTAR LA INFORMACIÓN OBTENIDA, EN LA PANT
export const reloadPost = () => {
    const postContainer = document.getElementById('postsContainer');
    window.addEventListener('DOMContentLoaded', async (e) => {
        const querySnapshot = await getPosts();
        querySnapshot.forEach(doc => {
            console.log(doc.id);
            let idPost = doc.id;
            let postsData = doc.data();
            //console.log(doc.data());
            let postText = postsData.post
            //console.log(postText)
            postContainer.innerHTML += templatePost(postsData, idPost);

        });
        EliminarPost();
        EditPosts();
    })
}

//OBTENER EL VALOR DE LA PUBLICACIÓN
export const createPost = () => {
    let btnPublicar = document.getElementById('publicar');
    let newPostInput = document.getElementById('newPostPerfil');
    btnPublicar.addEventListener('click', async () => {
        console.log('Publicar');
        let newPostText = newPostInput.value;
        console.log(newPostText);
        let user = auth.currentUser;
        await savePost(newPostText, user.email, user.uid);

        document.getElementById('newPostPerfil').value = '';
        //newPostInput.reset();
    })
}

//ELIMINAR POSTS
const EliminarPost = () => {
    const btnsDelete = document.querySelectorAll('.btn-delete');
    console.log(btnsDelete);
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            await deletePosts(e.target.dataset.id)
            
        })
    })
}
let editStatus = true;
const EditPosts = ()=>{
    const btnEdit = document.querySelectorAll('.btn-edit');
    let changeIcon = document.getElementById('btn-edit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', async(e) =>{
        const postEdit = await getpost(e.target.dataset.id);
        const id =postEdit.id;
        let enableWrite = document.getElementById('text-post-'+id);
        console.log(enableWrite);
            if(editStatus==true){
             changeIcon.src="./images/save.png";
            enableWrite.removeAttribute('readonly');
            console.log("dentro de if");
            editStatus=false;
            }else if(!editStatus) {
                await updatePosts(id,{
                    post: enableWrite.value 
                })
                changeIcon.src = "./images/edit.png";
                //enableWrite.setAttribute('readonly',true);
                enableWrite.readOnly=true;
                console.log("dentro de else");
                editStatus=true;
            }
            
        })
    });
}