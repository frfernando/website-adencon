declare global {
  interface Window {
    sanbToast?: (message: string, tone?: 'ok' | 'info') => void;
  }
}

// CAMADA 10 (DS-100): Tracking automático de conversão no Umami.
function initConversionTracking() {
  if (typeof document === 'undefined') return;
  document.addEventListener(
    'click',
    (e) => {
      const el = e.target as HTMLElement | null;
      const anchor = el?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor || anchor.hasAttribute('data-umami-event')) return;
      const href = anchor.getAttribute('href') || '';
      const w = window as unknown as { umami?: { track?: (ev: string, data?: Record<string, string>) => void } };
      const origem = window.location.pathname;
      try {
        if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) {
          w.umami?.track?.('WhatsApp — Clique', { origem });
        } else if (/^tel:/i.test(href)) {
          w.umami?.track?.('Ligação — Clique', { origem });
        }
      } catch { }
    },
    { passive: true }
  );
}

function initToasts() {
  if (typeof window.sanbToast === 'function') return;
  window.sanbToast = (message: string, tone: 'ok' | 'info' = 'ok') => {
    const host = document.getElementById('sanb-toasts');
    if (!host) return;
    const el = document.createElement('div');
    el.className = `sanb-toast sanb-toast-${tone}`;
    el.setAttribute('role', 'status');
    const dot = document.createElement('span');
    dot.className = 'sanb-toast-dot';
    dot.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = message;
    el.appendChild(dot);
    el.appendChild(text);
    host.appendChild(el);
    while (host.children.length > 3) host.firstElementChild?.remove();
    window.setTimeout(() => {
      el.classList.add('sanb-toast-out');
      window.setTimeout(() => el.remove(), 320);
    }, 3600);
  };
}

// Lightweight native interaction engine (Zero dependencies, Zero forced reflow)
function initNativeInteractions() {
  const isDesktopHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // 1. CAMADA 4: Spotlight Glow Hover on Cards
  const spotlightCards = document.querySelectorAll('[data-spotlight]');
  spotlightCards.forEach((cardEl) => {
    const card = cardEl as HTMLElement;
    if (card.dataset.spotlightActive === 'true') return;
    card.dataset.spotlightActive = 'true';

    let cardRect: DOMRect | null = null;
    const updateRect = () => { cardRect = card.getBoundingClientRect(); };

    card.addEventListener('mouseenter', updateRect, { passive: true });
    card.addEventListener('mousemove', (e: MouseEvent) => {
      if (!cardRect) updateRect();
      if (!cardRect) return;
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    }, { passive: true });
    card.addEventListener('mouseleave', () => { cardRect = null; }, { passive: true });
  });

  // 2. CAMADA 6: 3D Perspective Tilt Physics Engine
  if (isDesktopHover) {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach((el) => {
      const target = el as HTMLElement;
      if (target.dataset.tiltActive === 'true') return;
      target.dataset.tiltActive = 'true';

      const maxTilt = parseFloat(target.getAttribute('data-tilt-max') || '4.5');
      let rafId: number | null = null;
      let cachedRect: DOMRect | null = null;

      const onMouseEnter = () => {
        cachedRect = target.getBoundingClientRect();
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!cachedRect) cachedRect = target.getBoundingClientRect();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (!cachedRect) return;
          const mouseX = e.clientX - cachedRect.left;
          const mouseY = e.clientY - cachedRect.top;
          const centerX = cachedRect.width / 2;
          const centerY = cachedRect.height / 2;

          const rotateX = -((mouseY - centerY) / centerY) * maxTilt;
          const rotateY = ((mouseX - centerX) / centerX) * maxTilt;

          target.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012) translateZ(4px)`;
        });
      };

      const onMouseLeave = () => {
        cachedRect = null;
        if (rafId) cancelAnimationFrame(rafId);
        target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)';
      };

      target.addEventListener('mouseenter', onMouseEnter, { passive: true });
      target.addEventListener('mousemove', onMouseMove, { passive: true });
      target.addEventListener('mouseleave', onMouseLeave, { passive: true });
    });
  }

  // 3. CAMADA 6: High-Precision Viewport Reading Progress Bar (debounced via rAF)
  const progressBar = document.getElementById('viewport-progress-bar');
  if (progressBar && progressBar.dataset.progressActive !== 'true') {
    progressBar.dataset.progressActive = 'true';
    let ticking = false;

    const updateProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollTotal <= 0) {
            progressBar.style.width = '0%';
          } else {
            const progress = Math.min(100, Math.max(0, (window.scrollY / scrollTotal) * 100));
            progressBar.style.width = `${progress}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
  }
}

// Lazy loaded GSAP Motion (Loaded on idle, off critical path)
async function initGsapMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
  const fadeLeftElements = document.querySelectorAll('[data-animate="fade-left"]');
  const staggerGroups = document.querySelectorAll('[data-stagger-group]');
  const counterElements = document.querySelectorAll('[data-counter]');
  const isDesktopHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const magneticButtons = isDesktopHover ? document.querySelectorAll('[data-magnetic]') : [];

  if (
    fadeUpElements.length === 0 &&
    fadeLeftElements.length === 0 &&
    staggerGroups.length === 0 &&
    counterElements.length === 0 &&
    magneticButtons.length === 0
  ) {
    return;
  }

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger')
  ]);

  gsap.registerPlugin(ScrollTrigger);

  // 1. Entrance Fade-Up Elements (below fold only to avoid delaying LCP)
  fadeUpElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      (el as HTMLElement).style.opacity = '1';
      return;
    }
    gsap.fromTo(
      el,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  // 2. Entrance Fade-Left Elements
  fadeLeftElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      (el as HTMLElement).style.opacity = '1';
      return;
    }
    gsap.fromTo(
      el,
      { x: 32, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  // 3. Stagger Groups (e.g., Services Bento Grid)
  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll('[data-stagger-item]');
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // 4. Counter Animation for Numbers
  counterElements.forEach((counter) => {
    const target = parseFloat(counter.getAttribute('data-target') || '0');
    const suffix = counter.getAttribute('data-suffix') || '';
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        counter.textContent = `${Math.floor(obj.val)}${suffix}`;
      },
    });
  });

  // 5. CAMADA 6: High-Fidelity Magnetic Button Physics Engine
  if (isDesktopHover) {
    magneticButtons.forEach((btn) => {
      const button = btn as HTMLElement;
      if (button.dataset.magneticActive === 'true') return;
      button.dataset.magneticActive = 'true';

      let rect: DOMRect | null = null;
      const onMouseEnter = () => { rect = button.getBoundingClientRect(); };
      const onMouseMove = (e: MouseEvent) => {
        if (!rect) rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.22;
        const deltaY = (e.clientY - centerY) * 0.22;

        gsap.to(button, {
          x: deltaX,
          y: deltaY,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      const onMouseLeave = () => {
        rect = null;
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: 'elastic.out(1.15, 0.45)',
          overwrite: 'auto',
        });
      };

      button.addEventListener('mouseenter', onMouseEnter, { passive: true });
      button.addEventListener('mousemove', onMouseMove, { passive: true });
      button.addEventListener('mouseleave', onMouseLeave, { passive: true });
    });
  }
}

export function initMotion() {
  try {
    initToasts();
    initConversionTracking();
    initNativeInteractions();

    // Schedule heavy GSAP animations off the critical rendering path
    if ('requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
        .requestIdleCallback(() => initGsapMotion(), { timeout: 1000 });
    } else {
      setTimeout(() => initGsapMotion(), 150);
    }
  } catch (err) {
    console.warn('initMotion error:', err);
  }
}

// Auto-run on initial load and Astro View Transitions navigation
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMotion());
  } else {
    initMotion();
  }

  document.addEventListener('astro:page-load', () => {
    initMotion();
  });
}
