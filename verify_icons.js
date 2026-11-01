const fs = require('fs');
const lucide = require('lucide-react');

const comps = [
  './src/components/Navbar',
  './src/components/HeroSlider',
  './src/components/BookingBar',
  './src/components/AboutSection',
  './src/components/RoomsSection',
  './src/components/RooftopDiningSection',
  './src/components/OfferingsSection',
  './src/components/SpecialOffersSection',
  './src/components/GallerySection',
  './src/components/LocationSection',
  './src/components/Footer',
  './src/components/FloatingWidgets',
  './src/components/BookingModal',
  './src/components/RoomModal'
];

for (const c of comps) {
  try {
    const content = fs.readFileSync(c + '.jsx', 'utf8');
    const lucideMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g);
    for (const match of lucideMatches) {
      const icons = match[1].split(',').map(s => s.trim()).filter(Boolean);
      for (const icon of icons) {
        if (!lucide[icon]) {
          console.error(`MISSING ICON IN ${c}: ${icon}`);
        }
      }
    }
  } catch (e) {
    console.error('Error in', c, e.message);
  }
}
console.log('Finished checking lucide imports.');
