



// sideNav
const sideNav = document.querySelectorAll('.sideNav');
M.Sidenav.init(sideNav);

// slider

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators : false,
    height:500,
    transition:600,
    interval: 3000
     
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);


const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    scrollOffset:50
});

