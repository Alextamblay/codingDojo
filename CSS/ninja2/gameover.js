function showModal(score) {
    const body = document.querySelector("body");
    
    
    body.innerHTML = `<h1 > Score ${score} </h1>
                        <button id="reset_game" >reiniciar</button>
                        `
    
    document.getElementById("reset_game").addEventListener("click", () => location.reload())
}

export default showModal