window.onscroll = () => {
    let nav = this.document.querySelector('.nav')
    let slider = this.document.querySelector('.slider')
    if (window.pageYOffset > 250) {
        slider.style.paddingTop = '70px'
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
        slider.style.paddingTop = '0'
    }
}

