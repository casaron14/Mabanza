// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
}

// Nav scroll effect
const nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Scroll-triggered fade-up animations
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
}

// VCard download
const vcardBtn = document.getElementById('downloadVcard');
if (vcardBtn) {
    vcardBtn.addEventListener('click', () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
N:Mabanza;Kelvin;;;
FN:Kelvin Mabanza
ORG:UMOJA EXCHANGE
TITLE:Crypto Merchant & Inkryptus IBO
TEL;TYPE=CELL:+255778401894
URL;TYPE=Instagram:https://instagram.com/umojaexchange
URL;TYPE=WhatsApp:https://wa.me/255778401894
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Kelvin_Mabanza.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}
