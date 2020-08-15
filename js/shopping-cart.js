if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn btn-link text-danger mt-2')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('form-control rounded-sm text-dark border-info')
    for (var i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var quantityButtons = document.getElementsByClassName('quantity-button')
    for (var i = 0; i < quantityButtons.length; i++) {
        let input = quantityButtons[i]
        input.addEventListener('click', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('btn btn-lg btn-block btn-warning')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementById('btn-purchase').addEventListener('click', purchaseClicked)
    // document.getElementsByClassName('btn btn-primary')[0].addEventListener('click', purchaseClicked)
}

function addQuantitySelectors() {
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up border-info">' +
        `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle-fill text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
</svg>`+
        '</div><div class="quantity-button quantity-down border-info">' +
        `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle-fill text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"/>
</svg>`+
        '</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let node = document.getElementsByTagName("tbody")[0].innerHTML = ""
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    var numRow = buttonClicked.parentNode.parentNode.parentNode.getAttribute('row-number')
    document.getElementById(numRow).remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentNode.parentNode
    var productId = shopItem.getAttribute('product-id')
    var title = shopItem.firstChild.getAttribute('alt')
    var price = shopItem.firstChild.nextSibling.firstChild.innerText.replace(' € / Kg', '')
    var imageSrc = shopItem.firstChild.src
    addItemToCart(productId, title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(productId, title, price, imageSrc) {
    var cartRow = document.createElement('tr')
    var rowId = 'row-number-' + productId
    cartRow.setAttribute('id', rowId)
    var cartItems = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr')
    // return
    for (var i = 0; i < cartItems.length; i++) {
        // console.log(cartItems)
        if (cartItems[i].getAttribute('id') == rowId) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents =
        `<th scope="row">1</th>
        <td>
          <div class="card border-success mb-3 text-center">
            <div class="card-body text-success">
              <img src="${imageSrc}" alt="${title}" class="img-thumbnail">
            </div>
            <div class="card-footer bg-transparent border-success">Footer</div>
          </div>
        </td>
        <td>
          <h4 class="card-title pricing-card-title">${price} € <small class="text-muted">/ Kg</small></h4>
        </td>
        <td>
          <div class="row">
            <div class="quantity col-6">
              <input class="form-control rounded-sm text-dark border-info" type="number" min="1" max="10"
                step="1" value="1">
            </div>
            <div class="text-center col-6">
              <button type="button" class="btn btn-link text-danger mt-2" row-number="${rowId}">
                <span>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </td>`

    cartRow.innerHTML = cartRowContents
    document.getElementsByTagName('tbody')[0].appendChild(cartRow)
    // return
    cartRow.getElementsByClassName('btn btn-link text-danger mt-2')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('form-control rounded-sm text-dark border-info')[0].addEventListener('change', quantityChanged)
    addQuantitySelectors()
    var quantityButtons = document.getElementsByClassName('quantity-button')
    for (var i = 0; i < quantityButtons.length; i++) {
        let input = quantityButtons[i]
        input.addEventListener('click', quantityChanged)
    }
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByTagName('table')[0]
    var cartPrices = cartItemContainer.getElementsByClassName('card-title pricing-card-title')
    var cartQuantities = cartItemContainer.getElementsByClassName('form-control rounded-sm text-dark border-info')
    var total = 0
    for (var i = 0; i < cartPrices.length; i++) {
        var price = cartPrices[i].textContent
        var quantity = cartQuantities[i].value
        price = parseFloat(price.replace(' € / Kg', ''))
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementById('total-count').innerText = total
}