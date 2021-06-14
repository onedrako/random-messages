const messages = [
    "oscar",
    "gabito",
    "hunter",
    "julius",
    "jose",
    "lealin",
    "driven",
    "stillsun"
] 

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = {randomMsg}    //Para exportar el script
