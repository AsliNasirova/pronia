AOS.init();
// image 
const body=document.querySelector('body')
const slide_inner_right=document.getElementById('slide_img')
body.addEventListener('mousemove',(e)=>{
    let x=Math.floor(e.clientX/100)*1.5
    let y=Math.floor(e.clientY/100)*1.5
    slide_inner_right.style.transform=`translate(${-x}px,${-y}px)`
})