let  Input=document.querySelector('.Input')

Input.addEventListener('click',function () {
    if(Input.value=="搜索稀土掘金"){
        Input.value=""
    }
    else{
        if(Input.value=="") Input.value="搜索稀土掘金"
    }
});