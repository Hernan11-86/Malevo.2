document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for category clicks (optional, but nice UX)
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const categoryName = item.querySelector('span').textContent.toLowerCase().replace(/\s/g, '-');
            const targetElement = document.getElementById(`${categoryName}-title`);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function filterProducts() {
    const searchInput = document.getElementById('productSearch');
    const filter = searchInput.value.toLowerCase();
    const productCategories = document.querySelectorAll('.product-category');

    productCategories.forEach(category => {
        const productItems = category.querySelectorAll('.product-item');
        let categoryHasVisibleItems = false;

        productItems.forEach(item => {
            const productName = item.querySelector('span:first-child').textContent.toLowerCase();
            if (productName.includes(filter)) {
                item.style.display = 'flex';
                categoryHasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide category title based on visible items
        const categoryTitleId = category.id + '-title';
        const categoryTitle = document.getElementById(categoryTitleId);
        if (categoryTitle) {
            if (categoryHasVisibleItems || filter === '') { // Always show if search is empty
                categoryTitle.style.display = 'block';
            } else {
                categoryTitle.style.display = 'none';
            }
        }
    });
}
