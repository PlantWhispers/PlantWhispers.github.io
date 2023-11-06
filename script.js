async function toggleMobileMenu(menu) {
    var p = window.location.pathname;
    const hamburgerIcon = document.getElementById("hamburger-icon");
    hamburgerIcon.scrollIntoView({ behavior: "smooth" });
    if (p.length === 0  || p === "/" || p.match(/^\/?index/)) {
        const scopes = document.getElementById("scopes-objectives");
        scopes.classList.toggle('blur');
        const team = document.getElementById("our-team");
        team.classList.toggle('blur');
        const collaborations = document.getElementById("collaborations");
        collaborations.classList.toggle('blur');
        const research = document.getElementById("research-basis");
        research.classList.toggle('blur');
        const milestones = document.getElementById("milestones");
        milestones.classList.toggle('blur');
    }
    if (p.match(/^\/?impressum/)) {
        const impressum = document.getElementById("impressum");
        impressum.classList.toggle('blur');
    }
    if (p.match(/^\/?cookies/)) {
        const cookies = document.getElementById("cookies");
        cookies.classList.toggle('blur');
    }
    if (p.match(/^\/?datenschutz/)) {
        const datenschutz = document.getElementById("datenschutz");
        datenschutz.classList.toggle('blur');
    }
    menu.classList.toggle('open');
}

function Sleep(milliseconds) {ö
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}