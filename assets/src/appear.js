const lazyImgs = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    });

const lazyImgs2 = document.querySelectorAll('.lazy2');

    const observer2 = new IntersectionObserver((entries, observer2) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.classList.remove('loading');
                img.classList.add('loaded-slow');
                observer2.unobserve(img);
            }
        });
    });
    
    lazyImgs2.forEach(img => {
        observer2.observe(img);
    });