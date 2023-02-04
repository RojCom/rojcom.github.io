
/*function myfct() {
    var hdrpos = document.querySelector('#hdr').style;
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        hdrpos.position = "fixed";
        alert(4)
    }
    else {
        hdrpos.position= "static"
    }
}

window.onscroll = function () { function myfct() { 
    var scrl = document.body.scrollTop;
    var hdrpos = document.querySelector('#hdr');
    if (scrl > 50) {
        alert(0)
        hdrpos.style.position = 'fixed';
    }
    else {
        hdrpos.style.position = 'static';
    }
 }
}*/
window.onscroll = function () { myfnct() };
function myfnct() {
    var hdrpos = document.querySelector('#hdr');
    
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
       /*  hdrpos.position = 'fixed';
        hdrpos.background = '#444444';
        hdrpos.margin = "0 auto" */
        if (hdrpos.classList.contains('hdr')) {
            hdrpos.classList.remove('hdr');
            hdrpos.classList.add('hdr_fixed');            
        }        
    }
    else {
        hdrpos.classList.remove('hdr_fixed');
        hdrpos.classList.add('hdr');    
       /*  
        hdrpos.position = 'static';
        hdrpos.background = '#44444400';
        hdrpos.margin="0 auto"   */    
    } 
}

let mini_menu = document.querySelector('.hamburger_menu')
    mini_menu.addEventListener(
        'click', function () {
            let hamburger_menu_active = document.querySelector('.hor_menu_bar');
            if (hamburger_menu_active.style.display == 'none' || hamburger_menu_active.style.display != 'block' ) {
            hamburger_menu_active.style.display='block'
            }
            else {
                hamburger_menu_active.style.display = 'none';
            }
    }
)