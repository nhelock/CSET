const colors = [];
const colorlist = document.getElementById("colorlist");


function generator(){
    for (let i = 0; i < 10; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
    let newBtn = document.createElement('button');
    newBtn.className="button";
    newBtn.style.backgroundColor=colors[colors.length-1];
    document.querySelector('.button-holster').appendChild(newBtn);
    }
}

        /* Drop Down Check */
        colorlist.addEventListener("change", function () {
            const option = colorlist.value;
            if (option === "reset") {
                window.location.reload();    
            }
                 else {
                    const buttons = Array.from(document.querySelectorAll(".button"));
                    buttons.map((button, i) => {
                    if (option === "random") {

                            button.style.backgroundColor = colors[i];
                    
                    } 
                    else {
                        button.style.backgroundColor = option;
                    }
                });
            }
        });
