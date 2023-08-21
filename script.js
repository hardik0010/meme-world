document.addEventListener('DOMContentLoaded', () => {
    const contentCards = document.querySelectorAll('.content-card');
    
    contentCards.forEach((card, index) => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('click', () => {
            showMemeDetails(index);
        });
    });
    
    function showMemeDetails(cardIndex) {
        // Replace this with your actual logic to show meme details
        // For example, open a modal or navigate to a new page
        alert(`Showing details of meme card ${cardIndex + 1}`);
    }
});
