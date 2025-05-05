# Natsume & Kobushi - Zoo Website

A themed single-page website celebrating the mother and child hippo duo from Tokyo Zoo.

## Features

- **Zoo-like design**: Wooden signs, bamboo frames, and natural textures
- **Water effects**: Animated water background with bubble effects
- **Interactive elements**: Hover effects, ripples, and subtle animations
- **Mobile responsive**: Adapts to different screen sizes
- **Birthday countdown**: Dynamic countdown to Kobushi's next birthday

## Files

- `index.html` - The main HTML structure of the website
- `styles.css` - All styling and animations for the zoo theme
- `script.js` - Interactive JavaScript elements and effects
- `natsume-banner.jpg` and `natsume.jpg` - Images used in the website

## Customization Options

### Images

To update images, replace the existing image files with your own while keeping the same filenames:

- `natsume-banner.jpg` - Used in the header/logo area (ideally circular cropped)
- `natsume.jpg` - Used in the hero section (landscape orientation recommended)

### Content

Edit the HTML file to update:

- Names, dates, and descriptions
- Social media links
- Information about the hippos
- Announcements and event information

### Colors

The website uses a nature-inspired color palette. To change these colors, edit the CSS variables at the top of the `styles.css` file:

```css
:root {
  --color-earth: #8d7553;
  --color-earth-dark: #5d4b2c;
  --color-earth-light: #c4b795;
  --color-water: #4a8db7;
  /* and so on... */
}
```

## Browser Compatibility

This website works best on modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Extending the Website

To add more sections or features:

1. Follow the existing HTML structure pattern
2. Use the provided CSS classes for consistency
3. Extend the JavaScript for additional interactive elements

## Sound Effects

To enable hippo sounds (currently disabled by default):

1. Replace the placeholder URL in `script.js` with actual sound file URL
2. Sound will play occasionally after user interaction with the page

Enjoy your zoo-themed website!
