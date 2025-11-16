# Ardin's Portfolio Website

A modern neon soft-glow dark UI portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Theme**: Neon soft-glow effects with gradient animations
- **Smooth Image Slider**: Auto-rotating image carousel with manual controls
- **Fully Responsive Design**: Mobile-first approach with fluid layouts and typography
- **Interactive Components**: 
  - Skill cards with popup modals
  - Project showcase with detailed descriptions
  - Contact form with web3forms integration
- **Floating Icons**: Animated decorative elements throughout
- **Typography**: Geologica font with bold text styling
- **Performance Optimized**: Lazy loading, responsive images, and smooth animations

## Responsive Design Features

### **Fluid Layout System**
- **Container-based**: Uses responsive containers with max-widths
- **Fluid Typography**: CSS `clamp()` for smooth font scaling across viewports
- **Flexible Grid**: Auto-fit grids that adapt to screen size
- **Touch-friendly**: Minimum 44px touch targets for mobile

### **Breakpoint Strategy**
- **Mobile**: < 640px (sm) - Single column, compact navigation
- **Tablet**: 640px - 1024px (sm-md) - Two-column grids
- **Desktop**: > 1024px (lg-xl) - Multi-column layouts, full navigation

### **Typography Scaling**
- **Headings**: `clamp(2rem, 5vw, 3.5rem)` for smooth scaling
- **Body Text**: `clamp(1rem, 2vw, 1.25rem)` for readability
- **Component Text**: Responsive font sizes with proper line-height

### **Performance Optimizations**
- **Lazy Loading**: Images and components load when needed
- **Responsive Images**: Different sizes for different viewports
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Touch Optimized**: Proper touch targets and gestures

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Icons**: Lucide React
- **Form Handling**: web3forms API

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main portfolio page
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
├── public/
│   ├── images/               # Local images for slider
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   └── img4.jpg
│   └── medal.png             # Medal image for mobile fallback
└── prisma/
```

## Image Slider Features

- **Auto-slide**: Changes every 4 seconds automatically
- **Manual Navigation**: Left/right arrow buttons with touch support
- **Dot Indicators**: Click to jump to specific image
- **Smooth Transitions**: 1-second fade effects
- **Responsive**: Works on all screen sizes with proper touch targets

## Responsive Breakpoints

- **Mobile**: < 640px
  - Single column layout
  - Compact navigation (hamburger menu)
  - Smaller touch targets
  - Optimized image sizes

- **Tablet**: 640px - 1024px
  - Two-column grids
  - Medium-sized components
  - Touch-optimized interactions

- **Desktop**: > 1024px
  - Multi-column layouts
  - Full navigation
  - Hover states and animations
  - Larger images and text

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run linter**:
   ```bash
   npm run lint
   ```

## Image Configuration

The portfolio uses local images stored in `/public/images/` for the slider:
- `img1.jpg` - Slider image 1
- `img2.jpg` - Slider image 2  
- `img3.jpg` - Slider image 3
- `img4.jpg` - Slider image 4

Replace these placeholder files with your actual images. Recommended sizes:
- **Desktop**: 1920x1080px
- **Mobile**: 800x600px
- **Format**: JPEG with 80-90% quality

## Contact Form

The contact form uses web3forms API. Update the access key in `src/app/page.tsx`:
```javascript
access_key: 'your-web3forms-access-key'
```

## Personal Information

Current configuration:
- **Name**: Ardin
- **Title**: Economics student at Gadjah Mada University
- **Tagline**: Explorer
- **Interests**: Web Development, Cloud Computing, LLM, Design, Space Exploration

## Projects

1. **Bot Mail to WhatsApp Forwarder** - Automated message forwarding system
2. **Personal Dashboard** - Comprehensive life management hub
3. **Agentic Tracker Tools** - AI-powered productivity analytics

## Performance Guidelines

- **LCP Target**: < 2.5s on 3G
- **Image Optimization**: WebP format with fallbacks
- **Bundle Size**: Minimize JavaScript for mobile
- **Animation Performance**: Use CSS transforms and will-change

## Accessibility

- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Color Contrast**: AA compliance for text readability
- **Touch Targets**: Minimum 44px for mobile usability
- **Reduced Motion**: Respects user preferences

## Deployment

This project is configured for deployment on Vercel or any Next.js compatible platform.

## License

MIT License