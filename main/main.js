document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
document.getElementById("modalll").style.backgroundColor = sessionStorage.getItem('bg');

function darker() {
    if (sessionStorage.getItem('bg') === '#f7f6f6') {

        sessionStorage.setItem('bg', '#000');
        sessionStorage.setItem('cc', '#f7f6f6');
    }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', '#000');
        sessionStorage.setItem('cc', '#f7f6f6');
    }
    else if (sessionStorage.getItem('bg') === '#000') {
        sessionStorage.setItem('bg', '#f7f6f6');
        sessionStorage.setItem('cc', '#000');

    }

    document.body.style.backgroundColor = sessionStorage.getItem('bg');
    document.body.style.color = sessionStorage.getItem('cc');
    document.getElementById("modalll").style.backgroundColor = sessionStorage.getItem('bg');
}

black = "#000";
white = "#f7f6f6";

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});