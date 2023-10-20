async function toggleMobileMenu(menu) {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    hamburgerIcon.scrollIntoView({ behavior: "smooth" });
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
    menu.classList.toggle('open');
    await Sleep(500);
    document.body.classList.toggle('noscroll');
}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function scrollable() {
    document.body.style.overflow = 'visivble';
}