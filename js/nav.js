document.addEventListener('DOMContentLoaded', function () {
  const navInit = () => {
      const nav = document.querySelector('.navbar');
      const links = document.querySelectorAll('.menu-link');
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
          if (window.pageYOffset + 57 >= section.offsetTop) {
              links.forEach(link => {
                  link.classList.remove('active-link');
                  if (link.dataset.section === section.dataset.section) {
                      link.classList.add('active-link')
                  }
              })
          }
      })
  }
  navInit()
  window.addEventListener('scroll', () => {
      navInit();
  })
  window.addEventListener('resize', () => {
      navInit();
  })
})
