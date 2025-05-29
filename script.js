document.addEventListener('DOMContentLoaded', () => {
    // Add smooth hover effect to container
    const container = document.querySelector('.container');
    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        container.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Add click effect to title
    const title = document.querySelector('.title');
    title.addEventListener('click', () => {
        title.style.transform = 'scale(1.1)';
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 200);
    });

    // Smooth scroll to video when description is clicked
    const description = document.querySelector('.description');
    const videoContainer = document.querySelector('.video-container');
    description.addEventListener('click', () => {
        videoContainer.scrollIntoView({ behavior: 'smooth' });
    });
});