document.addEventListener("DOMContentLoaded", () => {

    const pages = [
        document.getElementById("page1"),
        document.getElementById("page2"),
        document.getElementById("page3")
    ];

    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const currentPage = document.getElementById("currentPage");
    const totalPages = document.getElementById("totalPages");

    let current = 0;

    totalPages.textContent = String(pages.length).padStart(2, "0");

    function showPage(page, scroll = false) {

        current = page;

        pages.forEach((pageElement, index) => {
            pageElement.classList.toggle("hidden", index !== current);
        });

        currentPage.textContent = String(current + 1).padStart(2, "0");

        prevButton.disabled = current === 0;
        nextButton.disabled = current === pages.length - 1;

        // Solo hace scroll cuando el usuario cambia de página
        if (scroll) {
            window.scrollTo({
                top: document.getElementById("catalogo").offsetTop,
                behavior: "smooth"
            });
        }
    }

    prevButton.addEventListener("click", () => {

        if (current > 0) {
            showPage(current - 1, true);
        }

    });

    nextButton.addEventListener("click", () => {

        if (current < pages.length - 1) {
            showPage(current + 1, true);
        }

    });

    // Mostrar la primera página SIN hacer scroll
    showPage(0, false);

});