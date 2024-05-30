
/**
 * here we are selecting the dom element from the dom tree using some selectors like "getElementById"
 */
let imageList  = document.getElementsByClassName("liverpool")
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
shuffleButton = document.getElementById("shuffle")
/***
 * this boolean  variables are controlling the menu displaying and function autodisplay
*/
let isDisplayAuto = false
show = true

 var display = false ;

let index = 0

/**
 * this list is for controlling images with menu buttons
 */
let imagesSepareted = [
    "Liverpool1",    "Liverpool2",    "Liverpool3",    "Liverpool4",    "Liverpool5", "Liverpool",
    "chelsea1", "chelsea2", "chelsea3", "chelsea4", "chelsea5", "chelsea6",
    "unt1", "unt2","unt3","unt4","unt5","unt6",
    "city1","city2","city3","city4","city5","city6"
]

/**
 * this 2d list is for displaying the caroussel without the menu 
 */
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
    imageList[j].src = "images/"+images[index][j]+".jpeg"
}
image.src = imageList[0].src
  }
  /**
   * this function is for showing and hiding the menu 
   * also some animatons
   */
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
/** 
 * this function auto change the main image
 */
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
/**
 * 
 * this function show the next 6 images in the caroussel 
 */
  function previousImages(){
      index == 0 ? index = 3 : index-- ;
    for(j=0 ; j<6 ; j++){
        imageList[j].src = "images/"+images[index][j]+".jpeg"

   }
   image.src = imageList[0].src
     }

     /**
      * this function show the previous 6 images in the caroussel
      */
   function  nextSeparatedImage(){
         l== imagesSepareted.length-1 ? l=0 : l++
        image.src =  "images/"+imagesSepareted[l]+".jpeg"
  
     }

     /**
      * 
      * this function show the next separeted image in the carrousel
      */
     function  previousSeparatedImage(){
        l== 0 ? l=imagesSepareted.length-1 : l--
       image.src =  "images/"+imagesSepareted[l]+".jpeg"
 
    }
    /**
     * this function show a random image from the caroussel 
     */
    var actuelRand = 0
     function pickRandomImage(){
        if(!display){    
            inter =   setInterval(()=>{
               rand = Math.floor(Math.random()*imagesSepareted.length)
                l= rand
                while(rand == actuelRand+1 || rand == actuelRand -1)
                    {rand = Math.floor(Math.random()*imagesSepareted.length)
                    l= rand}
                    actuelRand = rand
                image.src = "images/"+imagesSepareted[rand]+".jpeg"
          
              },2000)
        }
        else{
            clearInterval(inter)
           
        }
     display = !display

     }
/** 
 * here we are adding the "click" event to the image list 
 */
for(i=0 ; i< imageList.length ; i++){
    imageList[i].addEventListener("click" ,changeImage)
}
/** 
 * here we are adding the "keypress" event to controll the caroussel 
 */
document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft") {
        console.log("jsfklk");
        previousSeparatedImage();
    }
    if(event.code === "Space") {
        displayAuto();
    }
    if(event.key === "ArrowRight") {
        nextSeparatedImage();
    }
});
  /**   
   * here we are adding events to DOM elements that we selected 
   */
next.addEventListener("click" ,nextImages)
one.addEventListener("click" ,previousSeparatedImage)
tow.addEventListener("click" ,nextSeparatedImage)
shuffleButton.addEventListener("click", pickRandomImage)
previous.addEventListener("click" ,previousImages)
menuButton.addEventListener("click" ,showMenu)
auto.addEventListener("click" ,displayAuto)
 




