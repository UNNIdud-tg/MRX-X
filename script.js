// Toggle Sidebar Menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('backdrop');
    const menuBtn = document.querySelector('.menu-btn');
    sidebar.classList.toggle('show');
    backdrop.classList.toggle('show');
    menuBtn.classList.toggle('open');
}

// Close Sidebar Menu
function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('backdrop');
    const menuBtn = document.querySelector('.menu-btn');
    sidebar.classList.remove('show');
    backdrop.classList.remove('show');
    menuBtn.classList.remove('open');
}
