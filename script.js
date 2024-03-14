const sections = document.querySelectorAll('div[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    //  reset: true
});
sr.reveal(`.banner`)
sr.reveal(`.left`, { origin: 'right' })
sr.reveal(`.right`, { origin: 'left' })
sr.reveal((`.box`))
sr.reveal((`.head ,.about-me, .copyright`))
