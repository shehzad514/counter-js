let count = 0;

const value=document.querySelector("#count");
const btns = document.querySelectorAll(".btn");
const decrease =document.querySelector(".decrease");
const reset = document.querySelector(".Reset");
const increase = document.querySelector(".Increase");

//for decrease
decrease.addEventListener('click', function()
{
    count--;
    const dec= getDecrease();
    value.textContent=dec;
    if(count < 0)
    {
        value.style.color="red";
    }
});
function getDecrease()
{
    return count;
}

//for increase
increase.addEventListener("click",function()
{
    count++;
    const inc = getIncrease();
    value.textContent=inc;
    if(count > 0)
    {
        value.style.color="blue";
    }
});
function getIncrease()
{
    return count;
}

// for Reset 
reset.addEventListener('click',function()
{
    const res=getReset();
    value.textContent=res;
    value.style.color="black";
});
function getReset()
{
    count=0;
    return count;
}


