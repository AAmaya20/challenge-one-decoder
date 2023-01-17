let message = document.getElementById("message")
let decMsg = document.getElementById("decMsg")
let copy = document.getElementById("copy")
let tempDecodeMessage
const encode = document.getElementById("encode")
const decode = document.getElementById("decode")

function cleanMessage() {
    message.value = ""
}
function copyMessage() {
    let cpyMsg = document.getElementById("decMsg")
    navigator.clipboard.writeText(cpyMsg.textContent)
    alert("Mensaje copiado :)")
    decMsg.replaceChildren("Aun no hay ningun texto.")
}
function encodeMessage(){
    if(message.value != ""){
        tempDecodeMessage = message.value.toLowerCase()
        console.log(tempDecodeMessage)
        let arrayMessage = tempDecodeMessage.split("")
        for (let i = 0; i < arrayMessage.length; i+=1) { 
            if(arrayMessage[i] == "a"){
                arrayMessage[i] = "ai"
            }
            if(arrayMessage[i] == "e"){
                arrayMessage[i] = "enter"
            }
            if(arrayMessage[i] == "i"){
                arrayMessage[i] = "imes"
            }
            if (arrayMessage[i] == "o") {
                arrayMessage[i] = "ober"
            }
            if (arrayMessage[i] == "u") {
                arrayMessage[i] = "ufat" 
            }
        }
        let encodeText = arrayMessage.join("")
        decMsg.replaceChildren(encodeText)
        cleanMessage()
    }else{
        alert("Tienes que escribir un mensaje.")
    }
}
function decodeMessage() {
    if(message.value != ""){
        tempDecodeMessage = message.value
        let arrayMessage = tempDecodeMessage.split("")
        for (let i = 0; i < arrayMessage.length; i+=1){
             if(arrayMessage[i] == "a" && arrayMessage[i+1] == "i"){
                delete(arrayMessage[i+1])
            }
            else if(arrayMessage[i] == "e" && arrayMessage[i+1] == "n" && arrayMessage[i+2] == "t" && arrayMessage[i+3] == "e" && arrayMessage[i+4] == "r"){
                delete(arrayMessage[i+1])
                delete(arrayMessage[i+2])
                delete(arrayMessage[i+3])
                delete(arrayMessage[i+4])
            }
            else if(arrayMessage[i] == "i" && arrayMessage[i+1] == "m" && arrayMessage[i+2] == "e" && arrayMessage[i+3] == "s"){
                delete(arrayMessage[i+1])
                delete(arrayMessage[i+2])
                delete(arrayMessage[i+3])
            }
            else if(arrayMessage[i] == "o" && arrayMessage[i+1] == "b" && arrayMessage[i+2] == "e" && arrayMessage[i+3] == "r"){
                delete(arrayMessage[i+1])
                delete(arrayMessage[i+2])
                delete(arrayMessage[i+3])
            }
            else if(arrayMessage[i] == "u" && arrayMessage[i+1] == "f" && arrayMessage[i+2] == "a" && arrayMessage[i+3] == "t"){
                delete(arrayMessage[i+1])
                delete(arrayMessage[i+2])
                delete(arrayMessage[i+3])
            }
        }
        let msg = arrayMessage.join("")
        decMsg.replaceChildren(msg)
        cleanMessage()
    }else{
        alert("Tienes que escribir un mensaje.")
    }
}
copy.onclick = copyMessage
message.onfocus = cleanMessage
encode.onclick = encodeMessage
decode.onclick = decodeMessage
