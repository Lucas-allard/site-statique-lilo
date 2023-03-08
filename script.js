document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sections = button.parentNode.parentNode.querySelectorAll('.sub-section');
            sections.forEach(section => section.classList.remove('active'));
            const currentSection = button.parentNode.parentNode.querySelector(`.sub-section:nth-of-type(${Array.from(button.parentNode.children).indexOf(button) + 1})`);
            currentSection.classList.add('active');
        });
    });
});

