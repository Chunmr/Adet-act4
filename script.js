const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function toggleMenu() {
	const isOpen = navLinks.classList.toggle("open");
	menuToggle.setAttribute("aria-expanded", isOpen);
	menuToggle.textContent = isOpen ? "Close" : "Menu";
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(function (link) {
	link.addEventListener("click", function () {
		navLinks.classList.remove("open");
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.textContent = "Menu";
	});
});

function applyTheme(theme) {
	root.setAttribute("data-theme", theme);
	themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

function toggleTheme() {
	const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
	applyTheme(next);
}

themeToggle.addEventListener("click", toggleTheme);
