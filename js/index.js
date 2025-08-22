function showPage(pageId) {
    const pages = ['home', 'services', 'about', 'contact', 'blog', 'testimonials', 'faq'];
    pages.forEach(page => {
        const element = document.getElementById(page + '-page');
        if (element) {
            element.classList.remove('active-page');
            element.classList.add('hidden-page');
        }
    });

    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden-page');
        targetPage.classList.add('active-page');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const currentNavLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (currentNavLink) {
        currentNavLink.classList.add('active');
    }

    document.getElementById('mobile-menu').classList.add('hidden');

    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function toggleFAQ(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

function handleContactForm(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Sua mensagem seria enviada para nossa equipe. Entraremos em contato em breve.');
}

function handleCommentForm(event) {
    event.preventDefault();
    alert('Comentário enviado com sucesso!');
}

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});