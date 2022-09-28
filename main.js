let profileMenu=document.getElementById('profileMenu');

function toggle(){
    profileMenu.classList.toggle('open-menu')
}

let sidebarActivity=document.getElementById('sidebarActivity');
let showMoreLink=document.getElementById('showMoreLink')

function toggleActivity(){
    sidebarActivity.classList.toggle('open-activity')
    if(sidebarActivity.classList.contains('open-activity'))
    {
        showMoreLink.innerText="Show less -"

    }
    else{
        showMoreLink.innerText="Show more +"

    }
}