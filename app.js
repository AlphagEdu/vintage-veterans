const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

<script>
document.getElementById('languageSwitcher').addEventListener('click', function() {
    // Toggle between English and Hindi
    const isHindi = document.documentElement.lang === 'hi';
    
    if (isHindi) {
        document.documentElement.lang = 'en'; // Change back to English
        document.getElementById('languageSwitcher').textContent = 'हिंदी';
        // Add logic to switch content back to English
    } else {
        document.documentElement.lang = 'hi'; // Change to Hindi
        document.getElementById('languageSwitcher').textContent = 'English';
        // Add logic to switch content to Hindi
    }

    // Example: Update text content (requires more comprehensive implementation)
    // document.getElementById('someElement').textContent = isHindi ? 'Some Hindi text' : 'Some English text';
;
</script>
