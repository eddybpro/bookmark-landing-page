const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navLinksBox = document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.nav-link'),
navIcon = document.querySelectorAll('.nav-icon'),
featuresBtns = document.querySelectorAll('.features-btn'),
featuresSlides = document.querySelectorAll('.features-slide'),
questions = document.querySelectorAll('.question-box'),
arrowIcons = document.querySelectorAll('.arrow-down'),
answers = document.querySelectorAll('.answer'),
contactBtn = document.querySelector('.contact-btn'),
emailCard = document.querySelector('.email-card'),
email = document.querySelector('.email'),
errorIcon = document.querySelector('.error-img'),
errorPara = document.querySelector('.error-para');


const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

contactBtn.addEventListener('click', ()=>{
    if(!regex.test(email.value)){
        emailCard.style.backgroundColor = 'hsl(0, 94%, 66%)';
        email.style.borderColor = 'hsl(0, 94%, 66%)';
        errorIcon.classList.remove('none');
        errorPara.classList.remove('none');
    }else{
        emailCard.style.backgroundColor = 'hsl(231, 69%, 60%)';
        email.style.borderColor ='hsl(0, 0%, 100%)';
        errorIcon.classList.add('none');
        errorPara.classList.add('none');
    }

})

questions.forEach((question, idx)=>{
    question.addEventListener('click',()=>{
        arrowIcons.forEach(icon=>{
            icon.style.color = 'hsl(231, 69%, 60%)';
            icon.style.transform = 'rotate(0deg)';
        });
        answers.forEach(answer=>{
            answer.classList.add('none');
        });

        arrowIcons[idx].style.transform = 'rotate(180deg)';
        arrowIcons[idx].style.color = 'hsl(0, 94%, 66%)';
        answers[idx].classList.remove('none');
    })
})




featuresBtns.forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{
        featuresBtns.forEach(btn=>{
            btn.style.color='hsl(229, 8%, 60%)';
            btn.style.borderBottom ='none';
        })
        btn.style.color = 'hsl(229, 31%, 21%)';
        btn.style.borderBottom = '4px solid hsl(0, 94%, 66%)';
        featuresSlides.forEach(slide=>{
            slide.classList.add('none');
        })
        featuresSlides[idx].classList.remove('none');
    })
})

menuBtn.addEventListener('click', switchFn);
closeBtn.addEventListener('click', switchFn);
navLinks.forEach(link => {
    link.addEventListener('click', switchFn);
})
navIcon.forEach(icon => {
    icon.addEventListener('click', switchFn);
})

function switchFn(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none-nav');
}








