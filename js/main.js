// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check localStorage for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
} else if (currentTheme === 'light') {
    document.body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

// Card data
const sections = [
    {
        id: 'pueblo',
        title: 'Mi Pueblo/Ciudad',
        description: 'Historia y lugares de interés',
        image: 'images/pueblo.png'
    },
    {
        id: 'coches',
        title: 'Guía de Coches',
        description: 'Modelos y especificaciones',
        image: 'images/coches.png'
    },
    {
        id: 'peliculas',
        title: 'Películas/Series',
        description: 'Mis favoritas',
        image: 'images/pelis.png'
    },
    {
        id: 'universidad',
        title: 'Mi Instituto/Universidad',
        description: 'Campus y departamentos',
        image: 'images/uni.png'
    },
    {
        id: 'pais',
        title: 'Mi País',
        description: 'Geografía y cultura',
        image: 'images/pais.png'
    }
];

// Generate cards
const container = document.querySelector('.cards-container');
sections.forEach(section => {
    const card = document.createElement('a');
    card.href = `secciones/${section.id}.html`;
    card.className = 'card';
    
    // Log image path for debugging
    console.log(`Loading image: ${section.image}`);
    
    card.innerHTML = `
        <img 
            src="${section.image}" 
            alt="${section.title}"
            onerror="console.error('Failed to load image: ${section.image}')"
        >
        <div class="card-content">
            <h3>${section.title}</h3>
            <p>${section.description}</p>
        </div>
    `;
    container.appendChild(card);
});
