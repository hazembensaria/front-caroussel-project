console.log("hazem")
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
    "liverpool",    "liverpool 1",    "liverpool 2",    "liverpool 3",    "liverpool 4",    "liverpool 5",
    "chelsea1", "chelsea2", "chelsea3", "chelsea4", "chelsea5", "chelsea6",
    "unt1", "unt2","unt3","unt4","unt5","unt6",
    "city1","city2","city3","city4","city5","city6"
]
let images = [
    ["liverpool",    "liverpool 1",    "liverpool 2",    "liverpool 3",    "liverpool 4",    "liverpool 5"],
    ["chelsea1", "chelsea2", "chelsea3", "chelsea4", "chelsea5", "chelsea6"],
    ["unt1", "unt2","unt3","unt4","unt5","unt6"],
    ["city1","city2","city3","city4","city5","city6"]
]
function styleover(){
    this.classList.add('big');
}
function changeImage(){
    image.classList.add("scaleMainImage")
    setTimeout(()=>{
    image.classList.remove("scaleMainImage")
    },1000)
  image.src = this.getAttribute('src');
}
function changeImages(){
    index == 3 ? index = 0 : index++ ;
 for(j=0 ; j<6 ; j++){
    x[j].src = "images/"+images[index][j]+".jpeg"
    // console.log(images[index][j])
}
image.src = x[0].src
  }
function showMenu(){
  
        // menu.classList.add("menuMoveDown")
        // bottom.classList.add("moveDown")
        // image.classList.add("scale")
        
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
            l== imagesSepareted.length ? l=0 : l++
      
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


function styleout(){
    this.classList.remove('big');
}

for(i=0 ; i< x.length ; i++){
    x[i].addEventListener("mouseover" ,styleover)
}
for(i=0 ; i< x.length ; i++){
    x[i].addEventListener("mouseout" ,styleout)
}
for(i=0 ; i< x.length ; i++){
    x[i].addEventListener("click" ,changeImage)
}
next.addEventListener("click" ,changeImages)
one.addEventListener("click" ,changeImages)
tow.addEventListener("click" ,previousImages)

previous.addEventListener("click" ,previousImages)

menuButton.addEventListener("click" ,showMenu)
auto.addEventListener("click" ,displayAuto)



