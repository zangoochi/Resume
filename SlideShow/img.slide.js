//===DEFAULT VALUES============================================================================================

//Array of images
var pic = [ 
			"EmpLogPictures/1.png", 
			"EmpLogPictures/2.png",
     		"EmpLogPictures/3.png",
			"EmpLogPictures/adminCreateRecord.png",
			"EmpLogPictures/adminEdit.png",
			"EmpLogPictures/adminEditRecord.png",
			"EmpLogPictures/adminGet.png",
			"EmpLogPictures/adminNew.png",
			"EmpLogPictures/adminRecord.png",
			"EmpLogPictures/pass.png",


     		];


//Captions for the images. 
//PRE: Indexes must match the index of the picture in pic
var captions = [
				"EmpLog Main Screen", 
				"1905 Rolls Royce", 
				"1937 Bugatti 57S", 
				"1937 Horch 853 Voll & Ruhrbech Sport Cabriolet", 
				"1931 Packard 883 Sport Phaeton", 
				"1948 Aston Martin DB1", 
				"1954 Oldsmobile F-88", 
				"1954 Jaguar D-Type", 
				"1957 Ferrari 250 Testa Rossa", 
				"1972 Porshe 916", 
				"1962 Ferrari 250 GTO", 
				"1948 Tucker Sedan"
				];

//Slide of all the pictures
var slide = new Array();

//3 Displayed Tiles
var tiles = new Array();

// current slide index
var index = 0; 

//Default background color
var default_background_color = "#1d6ca5";


//Link to forward icon
var forward_icon = "EmpLogPictures/forward.png";

//Link to back icon
var back_icon = "EmpLogPictures/backward.png";

//Number of tiles to be displayed on the page.
var number_of_tiles = 3;


//Current displayed image height and width
var picture_width = 600;
var picture_height = 500;

//Tile size
var tile_width = 150;
var tile_height = 150;

//============================================================================================================

//===PRELOAD DEFAULT VALUES===================================================================================

// preloading all images
if ( document.images ){
   for (var i in pic)
   {
    	slide.push(loadImage(pic[i])); 
   }
}

//preloading all styles such as background color and icons
check_next(index);
document.getElementById("display").src= slide[Math.floor((Math.random() * pic.length-1) + 1)].src; 
document.getElementById("display").width = picture_width;
document.getElementById("display").height = picture_height;
document.getElementById('display').style.background = default_background_color;
document.getElementById('tiles').style.background = default_background_color;
document.getElementById('forward_btn').src = forward_icon;
document.getElementById('back_btn').src = back_icon;
set_tile_size();

//Preloading addEventListeners for the captions for mouseover and mouseout
addListener();

//============================================================================================================

//===LOADS IMAGES IF ALLOWED==================================================================================
//If document allows images then create a new image and return that image
function loadImage(url)
{  
	if (document.images)
     {
         rslt = new Image();
         rslt.src = url; 
         rslt.id = url;
         rslt.setAttribute('class', 'tiles');
		 rslt.setAttribute('onClick', 'reply_click(this.id)');
         return rslt; 
      }
}

//============================================================================================================

//===HELPER METHODS===========================================================================================

function nextSlide(start)
{
	var value = tiles[number_of_tiles-1];
	start = slide.indexOf(value);
	check_next(start); 
	set_tile_size();
}

function check_next(start)
{
	if(slide.length-start >= number_of_tiles){
		tiles = [];
		document.getElementById('tiles').innerHTML = "";
		for(var i=0, j=start; i<number_of_tiles; ++i, ++j)
		{
			tiles[i] = slide[j];
			document.getElementById('tiles').appendChild(tiles[i]);
		}
		addListener();
	}else{
			check_next(start-1);
	}
}

function prevSlide(start)
{
	var value = tiles[0];
	start = slide.indexOf(value);
	check_previous(start); 
	set_tile_size();
}

function check_previous(start)
{
	if(start > 0)
	{
		document.getElementById('tiles').innerHTML = "";
		if(slide[start-(number_of_tiles-1)])
		{
			start = start-(number_of_tiles-1);
			for(var i=0, j=start; i<number_of_tiles; ++i, ++j)
			{
				tiles[i] = slide[j];
				document.getElementById('tiles').appendChild(tiles[i]);
			}
			addListener();
		}else{
			check_previous(start+1);
		}
	}
}

function reply_click(value)
{
	var i = pic.indexOf(value);
	var display = document.getElementById("display");
	display.src= slide[i].src; 
	display.width = picture_width;
	display.height = picture_height;	
	toggle_selected(value);

	var capt = document.getElementById('caption');
	capt.className = "tooltip";
	capt.innerHTML = captions[i];

}

function addListener(){
	var tile = document.getElementsByClassName("tiles");

    for(var i = 0; i<tile.length; i++){

       	tile[i].addEventListener("mouseover", function() 
       	{ 
       		var capt = document.getElementById('tooltip-container');
			capt.className = "tooltip";
			capt.innerHTML = captions[pic.indexOf(this.id)]; 
		});

        tile[i].addEventListener("mouseout", function() 
        { 
        	var capt = document.getElementById('tooltip-container');
        	capt.className = ""; 
        	capt.innerHTML = "";
		});
   	}
}

function toggle_selected(value)
{
	var images = document.getElementsByClassName('tiles'); 
	for (var i in images)
	{
		if(images[i].className == "tiles selected"){
			images[i].className = "tiles";
		}
		if(images[i].id == value)
		{
			images[i].className = "tiles selected";
		}
	}
}

//============================================================================================================

//===Document Modification Areas==============================================================================


function set_background()
{
	var color = document.getElementById('background').value;
	document.getElementById('display').style.background = color;
	document.getElementById('tiles').style.background = color;
}

function set_back()
{
	var button = document.getElementById('back').value;
	document.getElementById('back_btn').src = button;
}

function set_forward()
{
	var button = document.getElementById('forward').value;
	document.getElementById('forward_btn').src = button;
}


function set_tile_size()
{
	var tile_size = document.getElementsByClassName('tiles');
	for(var i in tile_size){
		tile_size[i].width = tile_width;
		tile_size[i].height = tile_height;
	}
}

//============================================================================================================



