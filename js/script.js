const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(l => l.classList.remove("active")); 
    this.classList.add("active"); 
  });
});

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // adjust navbar height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

 document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menu = document.getElementById('menu');
            const nav = document.getElementById('nav');
            const navLinks = document.querySelectorAll('.nav-link');

            // Check if elements exist before adding event listeners
            if (menu && nav) {
                menu.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    nav.classList.toggle('active');
                    console.log('Menu clicked, nav active:', nav.classList.contains('active'));
                });
            }

            // Close mobile menu when clicking on a nav link
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    if (nav) {
                        nav.classList.remove('active');
                    }
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (nav && menu) {
                    if (!nav.contains(e.target) && !menu.contains(e.target)) {
                        nav.classList.remove('active');
                    }
                }
            });

            // Active nav link highlighting
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    // Remove active class from all links
                    navLinks.forEach(function(l) {
                        l.classList.remove('active');
                    });
                    // Add active class to clicked link
                    e.target.classList.add('active');
                });
            });

            // Smooth scrolling for navigation links (if sections exist)
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        const targetSection = document.getElementById(targetId);
                        
                        if (targetSection) {
                            e.preventDefault();
                            targetSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && nav) {
                    nav.classList.remove('active');
                }
            });
        });

 document.getElementById("mailForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let subject = document.getElementById("subject").value;
  let body = document.getElementById("message").value;
  let email = "akshayoa123@gmail.com"; // 🔹 replace with your email

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


