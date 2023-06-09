function Contador(){
    const count = document.querySelector("#counter");

    let add = parseInt(count.innerHTML) + 1;

    add = add.toString();

    count.innerHTML = add;
    

}