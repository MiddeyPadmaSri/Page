let currentIndex =0;
function showNextImage(){
    currentIndex=(currentIndex +1)%ImageTrackList.length;
    document.getElementById("slider").src=images[currentIndex];
}
// Initialize with the first image
    document.getElementById("slider").src = images[currentIndex];
 

