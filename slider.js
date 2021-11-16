
var imgArray = [
  'assets/Slider/IMG_9145.JPG',
  'assets/Slider/IMG_9164.JPG',
  'assets/Slider/IMG_9191.JPG',
  'assets/Slider/IMG_9208.JPG',
  'assets/Slider/IMG_9209.JPG',
  'assets/Slider/IMG_9210.JPG',
  'assets/Slider/IMG_9225.JPG',
  'assets/Slider/IMG_9226.JPG',
  'assets/Slider/IMG_9238.JPG',
  'assets/Slider/IMG_9239.JPG'],
  curIndex = 0;
  imgDuration = 7000;

slideShow();
function slideShow() {
  document.getElementById('slider').className += "fadeOut";
  setTimeout(function() {
      document.getElementById('slider').src = imgArray[curIndex];
      document.getElementById('slider').className = "";
  },1000);
  curIndex++;
  if (curIndex == imgArray.length) { curIndex = 0; }
  setTimeout(slideShow, imgDuration);
}
