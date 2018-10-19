var cartInsert = "";
var clickFlag = "0";


$(document).ready(function () {
	
	var userSelection = false;

	$('div.spec-color-option1').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option2, div.spec-color-option3, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option2, div.spec-color-option3, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userSelection = true;
		console.log(userSelection);
	});
	$('div.spec-color-option2').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option3, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option3, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userSelection = true;
	});
	$('div.spec-color-option3').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userSelection = true;
	});
	$('div.spec-color-option4').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option3').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userSelection = true;
	});

	$('div.spec-fill-option1').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option2, div.spec-fill-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option2, div.spec-fill-option3').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userSelection = true;
	});
	$('div.spec-fill-option2').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option1, div.spec-fill-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option1, div.spec-fill-option3').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userSelection = true;
	});
	$('div.spec-fill-option3').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option1, div.spec-fill-option2').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option1, div.spec-fill-option2').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userSelection = true;
	});

	var colorSelection = localStorage.getItem( 'userColorSelection' );
	var fillSelection = localStorage.getItem( 'userFillSelection' );
	console.log(colorSelection);
	console.log(fillSelection);

	var $item = $("<div class='item'>\
					<div class='item-img'></div>\
					<div class='item-info'>\
						<div class='item-name'>Couch Pillow</div>\
						<table style='width:100%' class='item-options'>\
						  <tr>\
						    <th class='title'>Color</th>\
						    <th class='title'>Fill</th>\
						    <th class='title'>Price</th>\
						  </tr>\
						  <tr>\
						    <td class='item-color'>" + colorSelection + "</td>\
						    <td class='item-fill'>" + fillSelection + "</td>\
						    <td class='item-price'>$ 14.25</td>\
						  </tr>\
						</table>\
					</div>\
					<div class='btn-regular'>Delete</div>\
				</div>");

	var item = "<div class='item'>\
					<div class='item-img'></div>\
					<div class='item-info'>\
						<div class='item-name'>Couch Pillow</div>\
						<table style='width:100%' class='item-options'>\
						  <tr>\
						    <th class='title'>Color</th>\
						    <th class='title'>Fill</th>\
						    <th class='title'>Price</th>\
						  </tr>\
						  <tr>\
						    <td class='item-color'>" + colorSelection + "</td>\
						    <td class='item-fill'>" + fillSelection + "</td>\
						    <td class='item-price'>$ 14.25</td>\
						  </tr>\
						</table>\
					</div>\
					<div class='btn-regular'>Delete</div>\
				</div>";
 	var button = document.getElementById("clickme"),
  	count = 0;
  	



	$('#clickme').click(function() {
		console.log(userSelection);
		if (userSelection) {
			count += 1;
  			$('#itemNumber').html(count);
			//$('.shopping-cart-page').append($item);
			
			localStorage.setItem("userInsert", item);
			console.log("click");
			localStorage.setItem("clickflag", "1");
		} else {
  			alert('Please select a color and a fill!');
		}	
	});
	clickFlag = localStorage.getItem("clickflag");
	if (clickFlag != "1") {
		localStorage.setItem("userInsert", "");
	} 

	cartInsert = localStorage.getItem("userInsert");
	console.log(cartInsert);
	console.log("code");
	$('.shopping-cart-page').append(cartInsert);
	$('.shopping-cart-page').append(cartInsert);


});

