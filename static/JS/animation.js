// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })

// const burgAnimation = () =>{
//     var burger = document.querySelector('.svgburg')
//      var path1 = document.querySelector('.path1')
//      var path2 = document.querySelector('.path2')
//      var mline = document.querySelector('.mline')
//      burger.addEventListener('click',() =>{
//          path1.classList.toggle('cross');
//          path2.classList.toggle('cross');
//          mline.classList.toggle('hide');
//         }
//       )

//   }
//  burgAnimation();


(function () {
    const cursor = document.querySelector('.cursor');
    const circle = document.querySelector('.circle');
    const links = document.querySelectorAll('.link');
    const editPosCursor = (e) => {
        const {clientX: x, clientY: y} = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    };
    const animateit = function (e) {
        const span = this.querySelector('span');
        const {offsetX: x, offsetY: y} = e,
            {offsetWidth: width, offsetHeight: height} = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        circle.classList.add('hover');
        if (e.type === 'mouseleave') {
            circle.classList.remove('hover');
            span.style.transform = '';
        }
    };
    window.addEventListener('mousemove', editPosCursor);
    links.forEach(link => link.addEventListener('mousemove', animateit));
    links.forEach(link => link.addEventListener('mouseleave', animateit));
})();

// search box logic
function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length === 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}