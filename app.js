

var dropDown=document.getElementById('drop-down');


dropDown.addEventListener('click',()=>{
    var container=document.getElementsByClassName('container')[0]
    container.classList.toggle('active')
})

var account=document.getElementsByClassName('account')[0];


account.addEventListener('click',()=>{
    var accountItems=document.getElementsByClassName('account-items')[0]
    accountItems.classList.toggle('flex-active')
})