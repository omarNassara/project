
var ImageCollection = document.getElementsByClassName('item-image');
var ImageArray = [];
var lightboxContiner = document.getElementById('lightbox-continer');
var lightboxItem = document.getElementById('lightbox-item');
var currentSlideIndex = 0;
var nextBton = document.getElementById('next');
var prevBton = document.getElementById('prev');
var closeBton = document.getElementById('close');




for(var i=0 ; i < ImageCollection.length ; i++)
{
    ImageArray.push(ImageCollection[i]);
    ImageArray[i].addEventListener('click',function(eventInfo){
    currentSlideIndex = ImageArray.indexOf(eventInfo.target)    
    lightboxContiner.style.display = ('flex');
    var imaSrc = eventInfo.target.getAttribute("src");     
    lightboxItem.style.backgroundImage = "url("+imaSrc+")";
    })
}




function nextSlide()
{
    currentSlideIndex ++ ;
    if(currentSlideIndex == ImageArray.length)
    {
        currentSlideIndex = 0; 
    }
    lightboxItem.style.backgroundImage = "url("+ImageArray[currentSlideIndex].getAttribute("src")+")";
}



function prevSlide()
{
    currentSlideIndex -- ;
    if(currentSlideIndex < 0)
    {
       currentSlideIndex = ImageArray.length -1; 
    }
    lightboxItem.style.backgroundImage = "url("+ImageArray[currentSlideIndex].getAttribute("src")+")";
}

function closeSlide()
{
    lightboxContiner.style.display = 'none';
}
prevBton.addEventListener('click', prevSlide)
nextBton.addEventListener('click', nextSlide)
closeBton.addEventListener('click', closeSlide)

/*
lightboxContiner.addEventListener('click' , function(eventInfo)
{
   if(eventInfo.target != lightboxItem)
   {
    lightboxContiner.style.display = 'none';

   }

})
*/



document.body.addEventListener('keydown', function(eventInfo){
    if(eventInfo.keyCode == 39)
    {
         nextSlide();
    }
    else if(eventInfo.keyCode == 37)
    {
        prevSlide();
    }
    else if(eventInfo.keyCode == 27)
    {
        closeSlide();
    }
})