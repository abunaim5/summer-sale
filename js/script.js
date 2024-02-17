let totalPrice = 0;
const items = getElementsByClassName('.items');
for (const item of items) {
    item.addEventListener('click', function () {
        // items title
        const title = item.childNodes[3].childNodes[3].innerText;
        appendChildElement('item-list', title);

        // items price
        const priceText = item.childNodes[3].childNodes[5].childNodes[0].innerText;
        const price = parseFloat(priceText);
        totalPrice = totalPrice + price;
        setElementsInnerTextById('total-price', totalPrice.toFixed(2));
    })
}