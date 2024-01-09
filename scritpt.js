const header = document.querySelector(".header");


document.querySelector(".header span").addEventListener('click', function () {
    header.style.scale = "0";
    setTimeout(() => {
        header.style.scale = "1";
    }, "3000");
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('[data-search]');
    const items = document.querySelectorAll('.item p');

    searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            const parentItem = item.parentElement;

            if (text.includes(searchText)) {
                parentItem.style.display = 'flex';
            } else {
                parentItem.style.display = 'none';
            }
        });
    });
});
