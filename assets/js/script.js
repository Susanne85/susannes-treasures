const hero = document.getElementById('hero');


hero.addEventListener('mouseenter', function(event){


    event.currentTarget.classList.add('old-pic');
    event.currentTarget.classList.remove('new-pic');

})

hero.addEventListener('mouseleave', function(event){


    event.currentTarget.classList.add('new-pic');
    event.currentTarget.classList.remove('old-pic');

})