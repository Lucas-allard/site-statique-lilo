document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    const closeButtons = document.querySelectorAll('.close');

    const cards = document.querySelectorAll('.card');

    const carousel = document.querySelectorAll(".slider-wrapper");




    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sections = button.parentNode.parentNode.querySelectorAll('.sub-section');
            sections.forEach(section => section.classList.remove('active'));
            const currentSection = button.parentNode.parentNode.querySelector(`.sub-section:nth-of-type(${Array.from(button.parentNode.children).indexOf(button) + 1})`);
            currentSection.classList.add('active');
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // get the modal who is a brother of the card
            const modal = card.nextElementSibling;
            modal.classList.add('show');

        });
    });

    closeButtons.forEach(button => button.addEventListener('click', () => {
        const modal = document.querySelector('.show');
        modal.classList.remove('show');
    }));

    carousel.forEach(carousel => {
        const prevButton = carousel.querySelector('.slide-arrow-prev');
        const nextButton = carousel.querySelector('.slide-arrow-next');
        const slidesContainer = carousel.querySelector('.slides-container');

        prevButton.addEventListener('click', () => {
            const slideWidth = carousel.querySelector('.slide').clientWidth;
            slidesContainer.scrollLeft -= slideWidth;
        });

        nextButton.addEventListener('click', () => {
            const slideWidth = carousel.querySelector('.slide').clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        });
    });


});

