const toggle = document.getElementById("toggle");
toggle.addEventListener('change', (e)=>{
    document.body.classList.toggle('dark',e.target.checked);
});

// function themeChange(){
//     document.body.classList.toggle('dark')
// }

