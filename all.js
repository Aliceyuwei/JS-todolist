var btn = document.querySelector('.add');
btn.addEventListener('click',add,false);
function add(e) {
    var todo = document.querySelector('.todo');
    var str = '';
    // var text = '<li>'+ todo.value +'</li>';
    console.log(todo.value);
    // console.log(text);
    var list = document.querySelector('.list');
    var text = document.createElement('li');
    console.log(text);
    text.textContent = todo.value ;
    list.appendChild(text);
    // var list = document.querySelector('.list');
    // str+=text;
    // list.innerHTML = text;
}
