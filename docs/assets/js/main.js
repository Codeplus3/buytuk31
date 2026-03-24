// Icon Converter - Main JavaScript
// PWA and Accessibility Features

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content is available
                            if (confirm('تحديث جديد متاح! هل تريد إعادة تحميل الصفحة؟')) {
                                window.location.reload();
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.createElement('button');
installBtn.innerHTML = '<i class="fas fa-download"></i> تثبيت التطبيق';
installBtn.className = 'btn btn-primary install-btn';
installBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
    
    // Add install button to the page
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.appendChild(installBtn);
    }
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    }
});

// Accessibility Features
class AccessibilityManager {
    constructor() {
        this.settings = {
            fontSize: 100,
            highContrast: false,
            reducedMotion: false,
            screenReader: false,
            keyboardNav: false
        };
        this.loadSettings();
        this.init();
    }
    
    init() {
        this.createAccessibilityMenu();
        this.setupKeyboardShortcuts();
        this.applySettings();
        this.setupFocusManagement();
    }
    
    loadSettings() {
        const saved = localStorage.getItem('accessibilitySettings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }
    
    saveSettings() {
        localStorage.setItem('accessibilitySettings', JSON.stringify(this.settings));
    }
    
    createAccessibilityMenu() {
        const menu = document.createElement('div');
        menu.className = 'accessibility-menu';
        menu.innerHTML = `
            <button class="accessibility-toggle" onclick="this.parentElement.classList.toggle('open')">
                <i class="fas fa-universal-access"></i>
                الوصول
            </button>
            <div class="accessibility-options">
                <div class="accessibility-option">
                    <label>حجم الخط:</label>
                    <button onclick="accessibilityManager.adjustFontSize(-10)">A-</button>
                    <span id="fontSizeDisplay">100%</span>
                    <button onclick="accessibilityManager.adjustFontSize(10)">A+</button>
                    <button onclick="accessibilityManager.resetFontSize()">إعادة تعيين</button>
                </div>
                <div class="accessibility-option">
                    <label>
                        <input type="checkbox" ${this.settings.highContrast ? 'checked' : ''} 
                               onchange="accessibilityManager.toggleHighContrast(this.checked)">
                        تباين عالي
                    </label>
                </div>
                <div class="accessibility-option">
                    <label>
                        <input type="checkbox" ${this.settings.reducedMotion ? 'checked' : ''} 
                               onchange="accessibilityManager.toggleReducedMotion(this.checked)">
                        حركة مخفضة
                    </label>
                </div>
                <div class="accessibility-option">
                    <label>
                        <input type="checkbox" ${this.settings.screenReader ? 'checked' : ''} 
                               onchange="accessibilityManager.toggleScreenReader(this.checked)">
                        وضع قارئ الشاشة
                    </label>
                </div>
                <div class="accessibility-option">
                    <label>
                        <input type="checkbox" ${this.settings.keyboardNav ? 'checked' : ''} 
                               onchange="accessibilityManager.toggleKeyboardNav(this.checked)">
                        التنقل بلوحة المفاتيح
                    </label>
                </div>
            </div>
        `;
        
        document.body.appendChild(menu);
    }
    
    adjustFontSize(delta) {
        this.settings.fontSize = Math.max(50, Math.min(200, this.settings.fontSize + delta));
        this.applySettings();
        this.saveSettings();
    }
    
    resetFontSize() {
        this.settings.fontSize = 100;
        this.applySettings();
        this.saveSettings();
    }
    
    toggleHighContrast(enabled) {
        this.settings.highContrast = enabled;
        this.applySettings();
        this.saveSettings();
    }
    
    toggleReducedMotion(enabled) {
        this.settings.reducedMotion = enabled;
        this.applySettings();
        this.saveSettings();
    }
    
    toggleScreenReader(enabled) {
        this.settings.screenReader = enabled;
        this.applySettings();
        this.saveSettings();
    }
    
    toggleKeyboardNav(enabled) {
        this.settings.keyboardNav = enabled;
        this.applySettings();
        this.saveSettings();
    }
    
    applySettings() {
        // Font Size
        document.documentElement.style.fontSize = `${this.settings.fontSize}%`;
        document.getElementById('fontSizeDisplay').textContent = `${this.settings.fontSize}%`;
        
        // High Contrast
        if (this.settings.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
        
        // Reduced Motion
        if (this.settings.reducedMotion) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
        
        // Screen Reader
        if (this.settings.screenReader) {
            document.body.classList.add('screen-reader');
            this.addARIALabels();
        } else {
            document.body.classList.remove('screen-reader');
            this.removeARIALabels();
        }
        
        // Keyboard Navigation
        if (this.settings.keyboardNav) {
            document.body.classList.add('keyboard-nav');
        } else {
            document.body.classList.remove('keyboard-nav');
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + A: Toggle accessibility menu
            if (e.altKey && e.key === 'a') {
                e.preventDefault();
                document.querySelector('.accessibility-toggle').click();
            }
            
            // Alt + Plus: Increase font size
            if (e.altKey && (e.key === '+' || e.key === '=')) {
                e.preventDefault();
                this.adjustFontSize(10);
            }
            
            // Alt + Minus: Decrease font size
            if (e.altKey && e.key === '-') {
                e.preventDefault();
                this.adjustFontSize(-10);
            }
            
            // Alt + 0: Reset font size
            if (e.altKey && e.key === '0') {
                e.preventDefault();
                this.resetFontSize();
            }
            
            // Alt + H: Toggle high contrast
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                this.toggleHighContrast(!this.settings.highContrast);
            }
            
            // Alt + M: Toggle reduced motion
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                this.toggleReducedMotion(!this.settings.reducedMotion);
            }
        });
    }
    
    setupFocusManagement() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Focus indicators
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-focus');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-focus');
        });
    }
    
    addARIALabels() {
        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label')) {
                button.setAttribute('aria-label', button.textContent);
            }
        });
        
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (!link.getAttribute('aria-label') && !link.getAttribute('aria-describedby')) {
                link.setAttribute('aria-label', link.textContent);
            }
        });
    }
    
    removeARIALabels() {
        // Remove ARIA labels when screen reader mode is off
        const elements = document.querySelectorAll('[aria-label]');
        elements.forEach(element => {
            const label = element.getAttribute('aria-label');
            if (label === element.textContent) {
                element.removeAttribute('aria-label');
            }
        });
    }
}

// Initialize accessibility manager
const accessibilityManager = new AccessibilityManager();

// Performance Monitoring
const performanceMonitor = {
    init() {
        this.measurePageLoad();
        this.measureUserInteractions();
    },
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
            
            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_load_time', {
                    value: Math.round(loadTime),
                    custom_parameter: 'performance'
                });
            }
        });
    },
    
    measureUserInteractions() {
        let interactionCount = 0;
        let startTime = Date.now();
        
        document.addEventListener('click', () => {
            interactionCount++;
        });
        
        document.addEventListener('beforeunload', () => {
            const sessionTime = Date.now() - startTime;
            console.log(`Session time: ${sessionTime}ms, Interactions: ${interactionCount}`);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'session_time', {
                    value: Math.round(sessionTime / 1000),
                    custom_parameter: 'engagement'
                });
                gtag('event', 'interaction_count', {
                    value: interactionCount,
                    custom_parameter: 'engagement'
                });
            }
        });
    }
};

// Initialize performance monitor
performanceMonitor.init();

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    
    // Send error to analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            error_message: e.message,
            error_filename: e.filename,
            error_lineno: e.lineno,
            custom_parameter: 'error_tracking'
        });
    }
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'promise_rejection', {
            error_message: e.reason?.toString() || 'Unknown error',
            custom_parameter: 'error_tracking'
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading states
document.addEventListener('DOMContentLoaded', () => {
    // Add loading spinner to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.dataset.loading !== 'false') {
                const originalContent = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

console.log('Icon Converter Jekyll Theme loaded successfully!');
