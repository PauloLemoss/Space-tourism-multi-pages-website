document.querySelectorAll('.list-menu a').forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const pageName = link.textContent.replace(/[0-9]/g, '').trim().toLowerCase();
        let pageUrl = "";
        

        switch (pageName) {
            case 'home':
                pageUrl = '/index.html';
                break;
            case 'destination':
                pageUrl = '/src/pages/destination/moon.html';
                break;
            case 'crew':
                pageUrl = '/src/pages/crew/pilot.html';
                break;
            case 'technology':
                pageUrl = '/src/pages/technology/technology.html';
                break;
            default:
                console.log("Page not found");
                return;
        }

       
    

        console.log(`Redirecting to: ${pageUrl}`);
        window.location.href = pageUrl;
    });
});


document.querySelectorAll('.list-planets a').forEach(planets => {
    planets.addEventListener("click", (event) => {
        event.preventDefault();
        const pagePlanets = planets.textContent.replace(/[0-9]/g, '').trim().toLocaleLowerCase();
        let pageUrl = "";
        switch (pagePlanets) {
            case 'moon':
                pageUrl = 'moon.html';
                break;
            case 'mars':
                pageUrl = 'mars.html'
                break;
            case 'europa':
                pageUrl = 'europa.html';
                break;
            case 'titan':
                pageUrl = 'titan.html';
                break;
            default:
                console.log("Page not found");
                return;
        }
        console.log(`Redirecting to ${pageUrl}`);
        window.location.href = pageUrl;
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            const pages = ["pilot.html", "engineer.html", "commander.html", "specialist.html"];
            window.location.href = pages[index];
        });
    });
});


document.querySelectorAll('.list-numbers a').forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const pageUrl = link.getAttribute('data-page');
        if (pageUrl) {
            console.log(`Redirecting to ${pageUrl}`);
            window.location.href = pageUrl;
        } else {
            console.log("Page not found");
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const iconHamburger = document.querySelector('.icon-hamburger');
    const listMenu = document.querySelector('.list-menu');

    iconHamburger.addEventListener('click', function (event) {
        listMenu.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!listMenu.contains(event.target) && !iconHamburger.contains(event.target)) {
            listMenu.classList.remove('active');
        }
    });
});


