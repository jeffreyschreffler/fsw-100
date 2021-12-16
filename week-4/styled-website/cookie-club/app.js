
function searchBtnOn() {
    let grabNavLinks = document.querySelector('#nav-del')
    grabNavLinks.style.display ='none';
    let inputContainer = document.createElement('div');
    grabNavLinks.append(inputContainer);
    let showSearchBox = createElement('input');
    inputContainer.append(showSearchBox);
    showSearchBox.setAttribute('type','text')
  
    
   
}

function searchBtnOff() {
    let grabNavLinks = document.querySelector('#nav-del')
    grabNavLinks.style.visibility = 'visible'
}
