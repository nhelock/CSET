function groceryadd(){
    var x = document.getElementById('item').value;

    document.getElementsByClassName('list-holster')[0].insertAdjacentHTML("beforeend",
    `<input type="checkbox" name="${x}" class="grocery">
    <label for="grocery">${x}</label>
    <br>`)

   

}


function listHide(){
    let hide = Array.from(document.querySelectorAll(".grocery:checked+label, .grocery:checked"))
    for (const thing of hide)
    {
        thing.classList.add("hide");
    }
}


function listShow(){
    let hide = Array.from(document.querySelectorAll(".grocery:checked+label, .grocery:checked"))
    for (const thing of hide)
    {
        thing.classList.remove("hide");
    }
}