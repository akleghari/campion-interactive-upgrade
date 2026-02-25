

## Fix Non-Functioning Buttons

The buttons ("Start Your Journey", "Learn More", "Get in Touch", "Discover Our Approach") currently have no click handlers or links attached. They need to scroll to the appropriate sections on the page.

### Changes

**1. `src/components/Hero.tsx`**
- "Start Your Journey" button: Scroll to `#contact` section
- "Learn More" button: Scroll to `#about` section

**2. `src/components/Navbar.tsx`**
- "Get in Touch" button (desktop): Scroll to `#contact` section
- "Get in Touch" button (mobile): Scroll to `#contact` section and close menu

**3. `src/components/About.tsx`**
- "Discover Our Approach" button: Scroll to `#services` section

### Implementation Approach
- Add `onClick` handlers that use `document.getElementById().scrollIntoView({ behavior: 'smooth' })` for smooth scrolling
- This keeps it simple and consistent with the existing anchor-based navigation in the navbar links

### Files Modified
- `src/components/Hero.tsx` (2 buttons)
- `src/components/Navbar.tsx` (2 buttons)
- `src/components/About.tsx` (1 button)

