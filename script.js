// infinite scroll

$(document).ready(function() {
    $('div').fadeIn(1000).removeClass('hidden');
    console.log('help');
});

const items = document.querySelectorAll('.Figure');

const active = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('viewscroll');
        } else {
            entry.target.classList.remove('viewscroll');
        }
    });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io2.observe(items[i]);
}

//click to show text

// $('.Figure').on('click', function() {
//     $(this).find('.overlay').css("opacity", 1);
// });

// $('.text').on('click', function() {
//     $(this).parent().hide();
// });


// $('.Figure').on('click', function() {
//     $(this).find('.overlay').toggle();
// });

// var a;

// function show_hide() {
//     if (a == 1) {
//         document.getElementsByClassName("overlay").style.opacity = "1";
//         return a = 0;
//     } else {
//         document.getElementsByClassName("overlay").style.opacity = "0";
//     }
// }