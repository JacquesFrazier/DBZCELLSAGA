

//Establish Code
document.getElementById("goku").onclick = DBZgoku
document.getElementById("gohan").onclick = DBZgohan
document.getElementById("piccolo").onclick = DBZpiccolo
document.getElementById("vegeta").onclick = DBZvegeta
document.getElementById("trunks").onclick = DBZtrunks
document.getElementById("krillin").onclick = DBZkrillin

//Place Function
//Try To Make Image Show ON Full Webpage - complete!
//COME BACK WHEN YOU COME UP WITH BETTER IDEAS

document.querySelector('body').style.backgroundSize = 'cover'


function DBZgoku() {
    document.querySelector('body').style.backgroundImage = "URL(image/goku.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundColor = "orange"
}
function DBZgohan() {
    document.querySelector('body').style.backgroundImage = "URL(image/gohan.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundColor = "purple"
}
function DBZpiccolo() {
    document.querySelector('body').style.backgroundImage = "URL(image/piccolo.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgrounColor = "green"
}
function DBZvegeta() {
    document.querySelector('body').style.backgroundImage = "URL(image/vegeta.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundColor = "blue"
}
function DBZtrunks() {
    document.querySelector('body').style.backgroundImage = "URL(image/trunks.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundColor = "lightblue"
}
function DBZkrillin() {
    document.querySelector('body').style.backgroundImage = "URL(image/krillin.jpg)"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundColor = "red"
}
