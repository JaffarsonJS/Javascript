const btn = document.getElementById('btn');
const inputArea = document.getElementById('input');

btn.addEventListener('click', () => {
    const value = inputArea.value
    
    const addList = document.createElement('li');
    
    // addList.appendChild(document.createTextNode(value));
    
    addList.innerText = value
    document.querySelector('ul').appendChild(addList);
    inputArea.value=''

    addList.addEventListener('click', ()=> {
        addList.style.textDecoration = "line-through"
    });

    addList.addEventListener('dblclick', ()=> {
        document.querySelector('ul').removeChild(addList);
    });

})