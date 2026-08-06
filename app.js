/* ==========================================================================
   Batase Brindavan English Boarding School - JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. Header Scroll & Active Link Highlighting
    // ----------------------------------------------------------------------
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Sticky Header effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Highlighting based on scroll
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------------------------
    // 2. Mobile Menu Drawer Toggle
    // ----------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile nav when clicking any link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. Quick Tour Modal & Slideshow with Authentic Photos
    // ----------------------------------------------------------------------
    const quickTourBtn = document.getElementById('quickTourBtn');
    const tourModal = document.getElementById('tourModal');
    const closeTourModal = document.getElementById('closeTourModal');
    const tourSlideImg = document.getElementById('tourSlideImg');
    const tourSlideCaption = document.getElementById('tourSlideCaption');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const slideIndicator = document.getElementById('slideIndicator');

    const tourSlides = [
        {
            img: 'images/real_school_building.jpg',
            title: 'Batase Brindavan School & Staff',
            desc: 'Official school building and dedicated teaching staff in Maijogmai Rural Municipality–4, Ilam.'
        },
        {
            img: 'images/real_classroom_kids.jpg',
            title: 'Playgroup to Grade 8 Students',
            desc: 'Over 120 students receiving quality, affordable English-medium education.'
        },
        {
            img: 'images/real_cultural_dance.jpg',
            title: 'Cultural Costumes & Dance',
            desc: 'Students celebrating rich Nepalese traditions and cultural heritage.'
        },
        {
            img: 'images/real_annual_awards.jpg',
            title: 'Annual Function & Award Ceremony',
            desc: 'Recognizing academic excellence, discipline, and student achievements.'
        },
        {
            img: 'images/real_outdoor_picnic.jpg',
            title: 'Outdoor Field Gathering & Picnic',
            desc: 'Community gatherings and outdoor activities in the scenic hills of Maijogmai, Ilam.'
        }
    ];

    let currentSlideIdx = 0;

    function updateTourSlide(index) {
        currentSlideIdx = index;
        const slide = tourSlides[currentSlideIdx];
        tourSlideImg.src = slide.img;
        tourSlideCaption.querySelector('h4').textContent = slide.title;
        tourSlideCaption.querySelector('p').textContent = slide.desc;
        slideIndicator.textContent = `${currentSlideIdx + 1} / ${tourSlides.length}`;
    }

    if (quickTourBtn && tourModal) {
        quickTourBtn.addEventListener('click', () => {
            updateTourSlide(0);
            tourModal.classList.add('active');
        });

        closeTourModal.addEventListener('click', () => {
            tourModal.classList.remove('active');
        });

        prevSlide.addEventListener('click', () => {
            const newIdx = (currentSlideIdx - 1 + tourSlides.length) % tourSlides.length;
            updateTourSlide(newIdx);
        });

        nextSlide.addEventListener('click', () => {
            const newIdx = (currentSlideIdx + 1) % tourSlides.length;
            updateTourSlide(newIdx);
        });

        tourModal.addEventListener('click', (e) => {
            if (e.target === tourModal) tourModal.classList.remove('active');
        });
    }

    // ----------------------------------------------------------------------
    // 4. Curriculum Modal
    // ----------------------------------------------------------------------
    const exploreCurrBtn = document.getElementById('exploreCurrBtn');
    const currModal = document.getElementById('currModal');
    const closeCurrModal = document.getElementById('closeCurrModal');

    if (exploreCurrBtn && currModal) {
        exploreCurrBtn.addEventListener('click', () => {
            currModal.classList.add('active');
        });

        closeCurrModal.addEventListener('click', () => {
            currModal.classList.remove('active');
        });

        currModal.addEventListener('click', (e) => {
            if (e.target === currModal) currModal.classList.remove('active');
        });
    }

    // ----------------------------------------------------------------------
    // 5. Gallery Category Filtering
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 6. Image Lightbox Viewer
    // ----------------------------------------------------------------------
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const closeLightbox = document.getElementById('closeLightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-title').textContent;
            const category = item.querySelector('.gallery-category').textContent;

            lightboxImg.src = img.src;
            lightboxTitle.textContent = title;
            lightboxCategory.textContent = category;

            lightbox.classList.add('active');
        });
    });

    if (closeLightbox && lightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }

    // ----------------------------------------------------------------------
    // 7. Contact Form Validation & Toast Notification
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');

    function showToast(message) {
        toastText.textContent = message;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const fullName = document.getElementById('fullName');
            const phoneNumber = document.getElementById('phoneNumber');
            const emailAddress = document.getElementById('emailAddress');
            const messageText = document.getElementById('messageText');

            // Name validation
            if (!fullName.value.trim()) {
                fullName.parentElement.classList.add('error');
                isValid = false;
            } else {
                fullName.parentElement.classList.remove('error');
            }

            // Phone validation
            if (!phoneNumber.value.trim() || phoneNumber.value.trim().length < 7) {
                phoneNumber.parentElement.classList.add('error');
                isValid = false;
            } else {
                phoneNumber.parentElement.classList.remove('error');
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailAddress.value.trim())) {
                emailAddress.parentElement.classList.add('error');
                isValid = false;
            } else {
                emailAddress.parentElement.classList.remove('error');
            }

            // Message validation
            if (!messageText.value.trim()) {
                messageText.parentElement.classList.add('error');
                isValid = false;
            } else {
                messageText.parentElement.classList.remove('error');
            }

            if (isValid) {
                showToast(`Thank you, ${fullName.value.trim()}! Your message has been sent to Batase Brindavan School.`);
                contactForm.reset();
            }
        });
    }
});
