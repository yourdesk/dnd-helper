import { elem } from "./util.js";

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        right: rect.right + window.scrollX,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,

    };
}

export function test_PutBoxAboveElement(element) {
    let origElementPosition = getOffset(element);

    let tempElement = elem('div');
    tempElement.classList.add('modal-popup');
    tempElement.style.cssText = `top: ${origElementPosition.top - 50}; left: ${origElementPosition.left}`;
    tempElement.id = element.id + '-modal';

    let tSub = elem('p');
    tSub.innerText = 'lick nuts';

    tempElement.appendChild(tSub);

    document.documentElement.appendChild(tempElement);
}

export function test_removePopupModal(id) {
    document.getElementById(id + '-modal').remove();
}

export function test_removePopupModalByElement(element) {
    test_removePopupModal(element.id);
}

// look at javascript.info/coordinates to jog your memory.