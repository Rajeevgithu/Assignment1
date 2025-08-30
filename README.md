# PressMart - Responsive E-commerce Landing Page

A modern, fully responsive e-commerce landing page built with React and Vite. This project has been optimized for all device sizes, from mobile phones to large desktop screens.

## 🚀 Features

### Responsive Design
- **Mobile-First Approach**: Designed with mobile devices as the primary focus
- **Fluid Typography**: Uses `clamp()` for responsive font sizes that scale smoothly
- **Flexible Grid Layouts**: CSS Grid with `auto-fit` and `minmax()` for adaptive layouts
- **Touch-Friendly Interface**: Minimum 44px touch targets for mobile accessibility
- **Progressive Enhancement**: Enhanced experience on larger screens

### Breakpoints
- **Mobile**: < 520px
- **Tablet**: 520px - 768px
- **Small Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

### Components

#### Header
- Responsive navigation with hamburger menu for mobile
- Collapsible search functionality
- Touch-friendly icons with proper spacing
- Mobile-optimized dropdown menus

#### Hero Section
- Responsive grid layout (1 column on mobile, 2 on desktop)
- Fluid typography using `clamp()`
- Responsive image sizing
- Mobile-optimized call-to-action buttons

#### Categories
- Adaptive grid layout that adjusts to screen size
- Responsive image containers with proper aspect ratios
- Fluid text sizing and positioning
- Mobile-friendly touch targets

#### Products
- Responsive product grid with auto-fitting columns
- Adaptive product cards with consistent sizing
- Mobile-optimized product images
- Responsive pricing and rating displays

#### Features
- Flexible grid that adapts to available space
- Responsive icons and text
- Consistent spacing across all screen sizes

#### Promos
- Responsive promotional banners
- Adaptive text positioning
- Mobile-optimized call-to-action buttons

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS features including Grid, Flexbox, and clamp()
- **Responsive Design**: Mobile-first approach with progressive enhancement

## 📱 Responsive Features

### Typography
- Uses `clamp()` for fluid typography
- Minimum readable sizes on mobile
- Scales appropriately on larger screens
- Maintains hierarchy across all devices

### Layout
- CSS Grid with `auto-fit` and `minmax()`
- Flexible containers that adapt to content
- Proper spacing using `clamp()`
- Mobile-first grid systems

### Images
- Responsive image sizing
- Proper aspect ratios maintained
- Optimized loading for different screen sizes
- Object-fit for consistent display

### Navigation
- Hamburger menu for mobile devices
- Touch-friendly navigation items
- Proper spacing for finger navigation
- Accessible dropdown menus

## 🎨 Design System

### Colors
- Primary: #0ea5e9 (Blue)
- Accent: #f97316 (Orange)
- Sale: #ef4444 (Red)
- Dark: #0b1324
- Text: #1f2937
- Muted: #6b7280
- Border: #e5e7eb
- Background: #f8fafc
- White: #ffffff

### Spacing
- Uses `clamp()` for responsive spacing
- Consistent spacing scale
- Proper padding and margins for all screen sizes

### Typography Scale
- Responsive font sizes using `clamp()`
- Maintains readability across all devices
- Proper line heights and letter spacing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tak1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📱 Testing Responsive Design

### Browser Developer Tools
1. Open browser developer tools (F12)
2. Click the device toggle button
3. Test different device sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1200px+)

### Manual Testing Checklist
- [ ] Navigation works on mobile
- [ ] Images scale properly
- [ ] Text is readable on all screen sizes
- [ ] Buttons are touch-friendly
- [ ] Grid layouts adapt correctly
- [ ] No horizontal scrolling
- [ ] Search functionality works on mobile
- [ ] Dropdown menus are accessible

### Performance Testing
- [ ] Page loads quickly on mobile networks
- [ ] Images are optimized for different screen sizes
- [ ] Smooth animations and transitions
- [ ] No layout shifts during loading

## 🔧 Customization

### Adding New Breakpoints
Add new media queries in `src/App.css`:

```css
@media (max-width: 1200px) {
  /* Large tablet styles */
}

@media (max-width: 900px) {
  /* Tablet styles */
}

@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 520px) {
  /* Small mobile styles */
}

@media (max-width: 400px) {
  /* Extra small mobile styles */
}
```

### Modifying Responsive Values
Update `clamp()` values in components:

```css
/* Example: Responsive font size */
font-size: clamp(14px, 3vw, 18px);
/* Minimum: 14px, Preferred: 3vw, Maximum: 18px */
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple screen sizes
5. Submit a pull request

## 📞 Support

For support or questions about the responsive design implementation, please open an issue in the repository.
