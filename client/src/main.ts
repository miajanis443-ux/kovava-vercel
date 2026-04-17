// KOVAVA SOCKS - Interactive Script
// Handles cursor, scroll animations, and interactions

// ===== CUSTOM CURSOR =====
const CR = document.getElementById('CR') as HTMLElement;
const CD = document.getElementById('CD') as HTMLElement;

document.addEventListener('mousemove', (e) => {
  CR.style.left = e.clientX + 'px';
  CR.style.top = e.clientY + 'px';
  CD.style.left = e.clientX + 'px';
  CD.style.top = e.clientY + 'px';
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, observerOptions);

document.querySelectorAll('.rv').forEach(el => {
  observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
const NAV = document.getElementById('NAV') as HTMLElement;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    NAV.classList.add('solid');
  } else {
    NAV.classList.remove('solid');
  }
  lastScroll = currentScroll;
});

// ===== IMAGE LOADING (Base64 Fallback) =====
const imageMap: Record<string, string> = {
  'HP': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/hero-main-JGzYXAxgxttVwBMeV4AJWD.webp',
  'FB-PHOTO': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/hero-main-JGzYXAxgxttVwBMeV4AJWD.webp',
  'NL': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/kovava-logo-transparent-bg_a2dd5186.png',
  'FL': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/kovava-logo-transparent-bg_a2dd5186.png',
  'c1': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-illusion-XWXPwxTLYv4V8sn7XJZCRQ.webp',
  'c2': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-color-clash-jYumbj5fShjNxSqHg6Hej5.webp',
  'c3': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-daily-vibes-lifestyle-XGkUQ5uzehy9aBsoYR8w5r.webp',
  'c4': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-illusion-XWXPwxTLYv4V8sn7XJZCRQ.webp',
  'c5': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-color-clash-jYumbj5fShjNxSqHg6Hej5.webp',
  'p1': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-closeup-optical-8xsP75KsxVTWQg5aZL6KFu.webp',
  'p2': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-color-clash-flat-lay-KD32PswLTKp5AXqTYavzP7.webp',
  'p3': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/lookbook-street-style-black-male-VtWDxDdRhHRVCUZ9dgEGYe.webp',
  'b1': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/lookbook-street-style-white-female-Zm83BJfU9Gm5CxpJGtVtLA.webp',
  'b2': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/black-male-white-female-socks-ET6VGsWE4Mf8dtT4rr2xtZ.webp',
  'b3': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-illusion-XWXPwxTLYv4V8sn7XJZCRQ.webp',
  'b4': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-collection-grid-color-clash-jYumbj5fShjNxSqHg6Hej5.webp',
  'b5': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-daily-vibes-lifestyle-XGkUQ5uzehy9aBsoYR8w5r.webp',
  't1': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-closeup-optical-8xsP75KsxVTWQg5aZL6KFu.webp',
  't2': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/socks-color-clash-flat-lay-KD32PswLTKp5AXqTYavzP7.webp',
  't3': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/lookbook-street-style-black-male-VtWDxDdRhHRVCUZ9dgEGYe.webp',
  't4': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663203897486/5jJiPuKSv86iVhfeTSK2Ms/lookbook-street-style-white-female-Zm83BJfU9Gm5CxpJGtVtLA.webp',
};

Object.entries(imageMap).forEach(([id, url]) => {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === 'IMG') {
      (el as HTMLImageElement).src = url;
    } else {
      (el as HTMLElement).style.backgroundImage = `url(${url})`;
    }
  }
});

// ===== LOOKBOOK SCROLL =====
const LB = document.getElementById('LB') as HTMLElement;
if (LB) {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  LB.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - LB.offsetLeft;
    scrollLeft = LB.scrollLeft;
  });

  LB.addEventListener('mouseleave', () => {
    isDown = false;
  });

  LB.addEventListener('mouseup', () => {
    isDown = false;
  });

  LB.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - LB.offsetLeft;
    const walk = (x - startX) * 1;
    LB.scrollLeft = scrollLeft - walk;
  });
}

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
  anchor.addEventListener('click', function (e: Event) {
    e.preventDefault();
    const href = (anchor as HTMLAnchorElement).getAttribute('href');
    if (href && href.length > 1) {
      try {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (err) {
        console.warn('Invalid selector:', href);
      }
    }
  });
});

console.log('KOVAVA SOCKS - Interactive loaded ✓');
