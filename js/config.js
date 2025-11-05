// Configuración global de la aplicación
const CONFIG = {
    // Configuración de la institución
    institution: {
        name: 'IES Calderón de la Barca',
        shortName: 'IES Calderón',
        location: 'Pinto, Madrid',
        phone: '91 670 66 45',
        email: 'jestudios.ies.calderon.pinto@educa.madrid.org',
        website: 'https://www.iescalderon.es',
        address: 'Calle de la Institución, s/n, 28320 Pinto, Madrid',
        coordinates: {
            lat: 40.2415,
            lng: -3.6786
        },
        social: {
            twitter: 'https://twitter.com/iescalderonpnt',
            facebook: 'https://facebook.com/iescalderonpinto',
            instagram: 'https://instagram.com/iescalderonpinto',
            linkedin: 'https://linkedin.com/school/ies-calderon-de-la-barca'
        }
    },

    // Rutas de imágenes
    images: {
        logo: 'images/logo.png',
        favicon: 'images/favicon.png',
        hero: 'images/valdemoro/valdemoro-ayuntamiento.jpg',
        defaultThumbnail: 'images/default-thumbnail.jpg'
    },

    // Configuración de la interfaz
    ui: {
        theme: {
            primary: '#4A36C5',
            secondary: '#7C6AFF',
            accent: '#00C4A6',
            success: '#00C853',
            warning: '#FFAB00',
            error: '#D32F2F',
            dark: {
                surface: '#1C1B1F',
                onSurface: '#E6E1E5',
                surfaceVariant: '#49454F'
            },
            light: {
                surface: '#FCFAFF',
                onSurface: '#1D1B20',
                surfaceVariant: '#E8DEF8'
            }
        },
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        transitions: {
            fast: '150ms ease-in-out',
            normal: '300ms ease-in-out',
            slow: '500ms ease-in-out'
        }
    },

    // Configuración de animaciones
    animations: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out'
    },

    // Configuración de la galería
    gallery: {
        itemsPerPage: 6,
        imageSizes: {
            thumb: '300x200',
            medium: '800x600',
            large: '1200x800'
        }
    },

    // Configuración del mapa
    map: {
        zoom: 15,
        marker: 'images/map-marker.png',
        style: 'mapbox://styles/mapbox/light-v10'
    },

    // Configuración de la API
    api: {
        baseUrl: 'https://api.iescalderon.es/v1',
        endpoints: {
            news: '/news',
            events: '/events',
            courses: '/courses',
            contact: '/contact'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    },

    // Configuración de notificaciones
    notifications: {
        position: 'bottom-right',
        duration: 5000,
        max: 3
    },

    // Configuración de accesibilidad
    a11y: {
        skipToContent: 'Ir al contenido principal',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        themeToggle: 'Cambiar tema claro/oscuro',
        backToTop: 'Volver arriba'
    }
};

// Exportar configuración para módulos ES6
try {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = CONFIG;
    }
} catch (e) {
    // No hacer nada si no está en un entorno de módulo
}
