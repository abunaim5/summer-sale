// get elements by query selector all
function getElementsByClassName(className) {
    const elements = document.querySelectorAll(className);
    return elements;
}

// get elements by id
function getElementById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

// get elements inner text by id
function getElementInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// append child elements by id
function appendChildElement(elementId, text) {
    const element = document.getElementById(elementId);
    const child = document.createElement('li');
    child.innerText = text;
    element.appendChild(child);
}

// set elements inner text by id
function setElementsInnerTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

// get elements value by id
function getElementsValueById(elementId) {
    const element = getElementById(elementId);
    const value = element.value;
    return value;
}