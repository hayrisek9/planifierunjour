let inSubButton =document.getElementById('inSub');
let pljContainer = document.getElementById('pljContainer')
let inTex=document.getElementById('inTex')
let inClear=document.getElementById('inClear');

inSubButton.addEventListener(
'click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    pljContainer.appendChild(paragraph);
    paragraph.innerHTML = inTex.value;
    inTex.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through'
    });
    paragraph.addEventListener('dblclick', function(){
        pljContainer.removeChild(paragraph) ; 
    })
    inClear.addEventListener('click',function(){
        paragraph.remove();
    })
})
