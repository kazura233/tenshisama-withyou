let url = new URL(window.location.href)
let areaindex = url.search
let number = areaindex.replace('?slide=', '')
$('.slide-items').slick()
$('.slide-items').slick('slickGoTo', number)
