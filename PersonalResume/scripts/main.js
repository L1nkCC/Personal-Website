const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElementsRight = document.querySelectorAll('.right');
hiddenElementsRight.forEach((el)=>observer.observe(el));
const hiddenElementsLeft = document.querySelectorAll('.left');
hiddenElementsLeft.forEach((el)=>observer.observe(el));