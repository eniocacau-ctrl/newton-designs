// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Hamburguer
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Verificar se os elementos existem antes de adicionar eventos
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    if (navLinks.length > 0) {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Navbar transparente -> sólida ao rolar
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Formulário de contato
    const form = document.querySelector('.contato-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const nome = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const mensagem = form.querySelector('textarea');
            
            if (nome && email && mensagem) {
                if (nome.value.trim() === '' || email.value.trim() === '' || mensagem.value.trim() === '') {
                    alert('Por favor, preencha todos os campos obrigatórios!');
                    return;
                }
                
                // Mensagem de sucesso
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            }
        });
    }

    // Animação suave ao aparecer os elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards
    const animatedElements = document.querySelectorAll('.servico-card, .portfolio-item');
    
    if (animatedElements.length > 0) {
        animatedElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // Scroll suave para links internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    if (smoothScrollLinks.length > 0) {
        smoothScrollLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

});