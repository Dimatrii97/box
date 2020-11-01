import $ from '../local_modules/jquery/dist/jquery.min'

$( ".banner__nav" ).click((_el)=>{
    $(_el.target).toggleClass("active");
    $(".banner").toggleClass("active")
})
