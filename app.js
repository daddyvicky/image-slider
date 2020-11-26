var i = 0;
var img = [];
var time = 3000;
// img list;

img[0]='images/img1.jpg';
img[1]='images/img2.jpg';
img[2]='images/img3.jpg';
img[3]='images/img4.jpg';
//cange img
function changeImg(){
  setTimeout(() => {
    document.s1.style.filter = "blur(10px)";
  }, 2500);
  document.s1.style.filter = "blur(0px)";
  document.s1.src= img[i];
  if(i< img.length - 1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout("changeImg()",time);
  
}

window.onload = changeImg;
