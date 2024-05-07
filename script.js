
let x  = document.getElementsByClassName("liverpool")
let next  = document.getElementById('next')
let menuButton  = document.getElementById('menuButton')
let menu  = document.getElementById('menu')
let previous  = document.getElementById('previous')
let image = document.getElementById("mainImage")
let one = document.getElementById("one")
let bottom = document.getElementById("bottom")
let tow = document.getElementById("tow")
let auto = document.getElementById("auto")
playButton = document.getElementById("playButton")

let isDisplayAuto = false
show = true
let index = 0
let imagesSepareted = [
    "Liverpool1",    "Liverpool2",    "Liverpool3",    "Liverpool4",    "Liverpool5", "Liverpool",
    "chelsea1", "chelsea2", "chelsea3", "chelsea4", "chelsea5", "chelsea6",
    "unt1", "unt2","unt3","unt4","unt5","unt6",
    "city1","city2","city3","city4","city5","city6"
]
let images = [
    ["Liverpool1",    "Liverpool2",    "Liverpool3",    "Liverpool4",    "Liverpool5", "Liverpool"],
    ["chelsea1", "chelsea2", "chelsea3", "chelsea4", "chelsea5", "chelsea6"],
    ["unt1", "unt2","unt3","unt4","unt5","unt6"],
    ["city1","city2","city3","city4","city5","city6"]
]
function changeImage(){
    image.classList.add("scaleMainImage")
    setTimeout(()=>{
    image.classList.remove("scaleMainImage")
    },1000)
  image.src = this.getAttribute('src');
}
function nextImages(){
    index == 3 ? index = 0 : index++ ;
 for(j=0 ; j<6 ; j++){
    x[j].src = "images/"+images[index][j]+".jpeg"
    // console.log(images[index][j])
}
image.src = x[0].src
  }
function showMenu(){
        console.log("this is show menu function");
        if(!bottom.classList.contains("moveDown")
    ){
        bottom.classList.add("moveDown")
        bottom.classList.remove("moveUp")
        menu.classList.add("menuMoveDown")
        menu.classList.remove("menuMoveUp")
        image.classList.add("scale")
        image.classList.remove("scaleDown")
        }
        else{
        bottom.classList.add("moveUp")
        bottom.classList.remove("moveDown")  
        menu.classList.add("menuMoveUp")
        menu.classList.remove("menuMoveDown")
        image.classList.add("scaleDown")
        image.classList.remove("scale")
        }
}
l=0

function displayAuto(){
    if(!isDisplayAuto){
        playButton.classList.remove("fa-play")
        playButton.classList.add("fa-stop")

        inter =   setInterval(()=>{
            image.src =  "images/"+imagesSepareted[l]+".jpeg"
            l== imagesSepareted.length-1 ? l=0 : l++
      
          },2000)
    }
    else{
        clearInterval(inter)
        playButton.classList.remove("fa-stop")
        playButton.classList.add("fa-play")
    }
 isDisplayAuto = !isDisplayAuto

}

  function previousImages(){
      index == 0 ? index = 3 : index-- ;
    for(j=0 ; j<6 ; j++){
       x[j].src = "images/"+images[index][j]+".jpeg"
       // console.log(images[index][j])
   }
   image.src = x[0].src
     }

for(i=0 ; i< x.length ; i++){
    x[i].addEventListener("click" ,changeImage)
}
document.addEventListener("keypress" , (e)=>{
    if(e.code === "Space")
        {displayAuto()}

})   
next.addEventListener("click" ,nextImages)
one.addEventListener("click" ,nextImages)
tow.addEventListener("click" ,previousImages)

previous.addEventListener("click" ,previousImages)

menuButton.addEventListener("click" ,showMenu)
auto.addEventListener("click" ,displayAuto)
 




