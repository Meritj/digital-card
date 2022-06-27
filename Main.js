function Main(){
    return( 
         <div class="main-content">
    <img className="photo-perso" alt="Rémi T'Jampens" src={require("./photo-remi.jpg")} width="250"></img>
    <h1 className="dev-name"> Rémi T'Jampens</h1>
    <h2>Développeur Web</h2>

    <button className="main-button">
        <a href = "mailto: tjampens.remi@gmail.com">Envoyez-moi un e-mail !</a>
    </button>
    
    <h3>A propos</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti modi blanditiis impedit earum! Autem neque ipsum rem, pariatur exercitationem vel, reprehenderit recusandae odio aperiam error, iure est omnis. Officia!</p>
    
    <h3>Centres d'intérêt</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit amet libero perferendis qui iure voluptas dolorem maxime explicabo possimus odit cumque nisi, porro iste culpa sunt tenetur distinctio voluptates dignissimos?</p>
    </div>
    )
}

export default Main;