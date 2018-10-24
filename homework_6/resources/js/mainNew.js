// Get user's choice for product name, color and fill
var userColorSelection = false;
var userFillSelection = false;

$(document).ready(function() {
	$('div.spec-color-option1').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option2, div.spec-color-option3, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option2, div.spec-color-option3, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userColorSelection = true;
	});
	$('div.spec-color-option2').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option3, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option3, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userColorSelection = true;
	});
	$('div.spec-color-option3').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option4').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option4').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userColorSelection = true;
	});
	$('div.spec-color-option4').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-color-option1, div.spec-color-option2, div.spec-color-option3').css('box-shadow', 'none');
		userColorSelection = $(this).text();
		localStorage.setItem( 'userColorSelection', userColorSelection );
		userColorSelection = true;
	});

	$('div.spec-fill-option1').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option2, div.spec-fill-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option2, div.spec-fill-option3').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userFillSelection = true;
	});
	$('div.spec-fill-option2').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option1, div.spec-fill-option3').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option1, div.spec-fill-option3').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userFillSelection = true;
	});
	$('div.spec-fill-option3').click(function() {
		$(this).css('border', '1.5px solid black');
		$(this).css('box-shadow', 'inset 0px 0px 0px .5px black');
		$('div.spec-fill-option1, div.spec-fill-option2').css('border', '1.5px solid hsla(0, 0%, 0%, 0.1)');
		$('div.spec-fill-option1, div.spec-fill-option2').css('box-shadow', 'none');
		userFillSelection = $(this).text();
		localStorage.setItem( 'userFillSelection', userFillSelection );
		userFillSelection = true;
	});

	$('#itemNumber').html(countCart());
});

var userNameSelection = $('h2').text();
localStorage.setItem( 'userNameSelection', userNameSelection );
var nameSelection = localStorage.getItem( 'userNameSelection' );
var colorSelection = localStorage.getItem( 'userColorSelection' );
var fillSelection = localStorage.getItem( 'userFillSelection' );

// ***********************************************************************************************************************
// Update shopping cart array

$('#add-to-cart').click(function(event) {
	if (userColorSelection && userFillSelection) {
		var colorSelection = localStorage.getItem( 'userColorSelection' );
		var fillSelection = localStorage.getItem( 'userFillSelection' );
		var name = nameSelection; // 取到所点击的商品名称
		var color = colorSelection; // 取所选商品的颜色
		var fill = fillSelection; // 取所选商品的 fill
		addItemToCart(name, color, fill, 14.25, 1); // 添加进 cart array
		$('#itemNumber').html(countCart());
		displayCart(); // call displayCart 函数显示目前购物车
	} else {
		alert('Please select a color and a fill.');
	}
});

$('#clear-cart').click(function(event) {
	clearCart();
	displayCart();
});

function displayCart() { // dis play shopping cart array
	var cartArray = listCart();
	var output = "";
	for (var i in cartArray) {
		output += "<div class='item'>\
			<div class='item-info'>\
				<div class='item-name'>" + cartArray[i].name + "</div>\
				<table style='width:100%' class='item-options'>\
				  <tr>\
				    <th class='title'>Color</th>\
				    <th class='title'>Fill</th>\
				    <th class='title'>Quantity</th>\
				    <th class='title'>Unit Price</th>\
				  </tr>\
				  <tr>\
				    <td class='item-color'>" + cartArray[i].color + "</td>\
				    <td class='item-fill'>" + cartArray[i].fill + "</td>\
				    <td class='item-fill'>" + cartArray[i].count + "</td>\
				    <td class='item-price'> $14.25 </td>\
				  </tr>\
				</table>\
			</div>\
			<div class='btn-regular delete-item' data-color='"+cartArray[i].color+"' data-fill='"+cartArray[i].fill+"'>Delete</div>\
		</div>"
	}
	$('#shopping-cart-content').html(output);
	$('#total-cart').html( totalCost() );
}

$('#shopping-cart-content').on('click', '.delete-item', function(event) {
	var color = $(this).attr('data-color');
	var fill = $(this).attr('data-fill');
	console.log(color);
	console.log(fill);
	removeItemFromCartAll(color, fill);
	displayCart();
});

// **************************************************************************************************************************************
// Shopping Cart Functions

var cart = [];

var Item = function(name, color, fill, price, count) {
	this.name = name,
	this.color = color,
	this.fill = fill,
	this.price = price,
	this.count = count
};

function addItemToCart(name, color, fill, price, count) {
	for (var i in cart) {
		if (cart[i].name === name && cart[i].color === color && cart[i].fill === fill) {
			cart[i].count += count;
			saveCart();
			return;
		}
	}
	var item = new Item(name, color, fill, price, count);
	cart = cart || [];
	cart.push(item);
	saveCart();
};

function removeItemFromCart(name) { // Removes one item
	for (var i in cart) {
		if (cart[i].name === name) {
			cart[i].count --;
			if (cart[i].count === 0) {
				cart.splice(i, 1);
			}
			break;
		}
	}
	saveCart();
}

function removeItemFromCartAll(color, fill) { // Removes all item name
	for (var i in cart) {
		if (cart[i].color === color) {
			if (cart[i].fill === fill) {
				cart.splice(i, 1);
			break;
			}
		}
	}
	saveCart();
}

function clearCart() { //Clear cart
	cart = [];
	saveCart();
}

function countCart() { // Return total count
	var totalCount = 0;
	for (var i in cart) {
		totalCount += cart[i].count;
	}
	return totalCount;
}

function totalCost () { // Return total cost
	var totalCost = 0;
	for (var i in cart) {
		totalCost += cart[i].price * cart[i].count;
	}
	return totalCost.toFixed(2);
}

function listCart() { // Display the cart in the console
	var cartCopy = [];
	for (var i in cart) {
		var item = cart[i];
		var itemCopy = {};
		for (var p in item) {
			itemCopy[p] = item[p];
		}
		itemCopy.total = (item.price * item.count).toFixed(2);
		cartCopy.push(itemCopy);
	}
	return cartCopy;
}

function saveCart() {// Save the cart to the local storage
	localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart () {// Retrive info from local storage
	cart = JSON.parse(localStorage.getItem('shoppingCart'));
}

loadCart();
displayCart();
