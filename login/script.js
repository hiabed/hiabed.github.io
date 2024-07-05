const singUp = document.querySelector("#signup");
const singIn = document.querySelector("#signin")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

// console.log();
function checkDevice()
{
    if (screen.width < 480 && screen.height < 960)
    {
        two.style.display = "none";
    }
}

function singUp_function(event)
{
    event.preventDefault();
    one.style.display = "none";
    three.style.display = "block";
}

function singIn_function(event)
{
    event.preventDefault();
    three.style.display = "none";
    one.style.display = "block";
}

singUp.addEventListener("click", singUp_function);
singIn.addEventListener("click", singIn_function);
checkDevice();