// AIO2025 Learning Journey - Custom JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize custom features
    initializeProgressBars();
    initializeModuleCards();
    initializeSearchEnhancement();
    initializeTagFiltering();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add back to top functionality
    addBackToTop();
    
    // Add reading time estimation
    addReadingTime();
    
    // Add copy code functionality
    addCopyCodeButtons();
});

// Initialize progress bars for modules
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        if (fill) {
            const progress = fill.getAttribute('data-progress') || 0;
            fill.style.width = progress + '%';
        }
    });
}

// Initialize module cards with hover effects
function initializeModuleCards() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Enhance search functionality
function initializeSearchEnhancement() {
    const searchInput = document.querySelector('.md-search__input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Add custom search logic here if needed
            console.log('Search query:', this.value);
        });
    }
}

// Initialize tag filtering system
function initializeTagFiltering() {
    const tagButtons = document.querySelectorAll('.tag-filter');
    
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            filterContentByTag(tag);
        });
    });
}

// Filter content by tags
function filterContentByTag(tag) {
    const contentItems = document.querySelectorAll('.content-item');
    
    contentItems.forEach(item => {
        const itemTags = item.getAttribute('data-tags');
        if (tag === 'all' || itemTags.includes(tag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update active filter button
    updateActiveFilter(tag);
}

// Update active filter button styling
function updateActiveFilter(activeTag) {
    const filterButtons = document.querySelectorAll('.tag-filter');
    
    filterButtons.forEach(button => {
        if (button.getAttribute('data-tag') === activeTag) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Add smooth scrolling for anchor links
function addSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add back to top functionality
function addBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--aio-primary);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add reading time estimation
function addReadingTime() {
    const content = document.querySelector('.md-content');
    if (content) {
        const text = content.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
        
        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.innerHTML = `📖 Estimated reading time: ${readingTime} minute${readingTime !== 1 ? 's' : ''}`;
        readingTimeElement.style.cssText = `
            color: var(--aio-accent);
            font-size: 0.9em;
            margin-bottom: 1rem;
            padding: 0.5rem;
            background: rgba(6, 182, 212, 0.1);
            border-radius: 4px;
            border-left: 3px solid var(--aio-accent);
        `;
        
        content.insertBefore(readingTimeElement, content.firstChild);
    }
}

// Add copy code functionality
function addCopyCodeButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋';
        copyButton.className = 'copy-code-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            padding: 5px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s ease;
        `;
        
        // Make parent pre element relative positioned
        const preElement = block.parentElement;
        preElement.style.position = 'relative';
        
        preElement.appendChild(copyButton);
        
        copyButton.addEventListener('click', function() {
            copyToClipboard(block.textContent);
            
            // Show feedback
            const originalText = this.innerHTML;
            this.innerHTML = '✅';
            this.style.background = 'rgba(16, 185, 129, 0.8)';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 2000);
        });
        
        copyButton.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        copyButton.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// Copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.md-search__input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals or clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.md-search__input');
        if (searchInput && searchInput.value) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    }
});

// Add analytics tracking (if needed)
function trackEvent(eventName, eventData) {
    // Implement your analytics tracking here
    console.log('Event tracked:', eventName, eventData);
}

// Add performance monitoring
window.addEventListener('load', function() {
    // Track page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        console.log('Page load time:', loadTime + 'ms');
        
        if (loadTime > 3000) {
            console.warn('Page load time is slow. Consider optimization.');
        }
    }
});

// Add error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send this to your error tracking service
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You can send this to your error tracking service
});

// Export functions for potential external use
window.AIO2025 = {
    filterContentByTag,
    trackEvent,
    copyToClipboard
}; 