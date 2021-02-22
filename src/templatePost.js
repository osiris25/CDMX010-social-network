
export const templatePost= (postsData,idPost) => {
    let postStructur= `<div class="activity">
    <div class="edit-post">           
    <img src="./images/delete.png" class="btn-delete" data-id="${idPost}">
    <img src="./images/edit.png" class="btn-edit" id="btn-edit" data-id="${idPost}" >
    </div> 
    <div class="name">${postsData.usermail}</div>
    <div class="publication">
    <textarea id="text-post-${idPost}" readonly > ${postsData.post}</textarea>
    </div>
        <div class="interaction">
                <label><img class="postIcon" src="./images/picture.png" class="picture"></label>           
                <label>3 <img class="postIcon" src="./images/coment.png" class="coment"></label>            
                <label>27 <img class="postIcon" src="./images/like.png" class="like"></label>
        </div>
    </div>               
    <div class="next">                   
    <input type="text" class="nextPost" placeholder="Escribe un comentario..."></input>
    <button class="enter" type"submit">Comentar</button>                    
    </div>`
    return postStructur;
}
