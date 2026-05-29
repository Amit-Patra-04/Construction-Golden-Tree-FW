# 🌳 Golden Tree Enterprises - Building Excellence

 **Rooted in Trust, Building Your Future.** An elegant, fully responsive, and modern multi-page landing website developed for Golden Tree Enterprises, a premier construction and interior designing company based in Bhubaneswar, Odisha.

---

## 📸 Website Preview

![Website Preview]<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/1934a46f-7d37-4377-9d03-cfb9460436d2" />

---

## 🔗 Live View
*Experience the website live: [ [Golden Tree Link](https://golden-tree.netlify.app/)]*

---

## 📖 Table of Contents

- [🌳 Golden Tree Enterprises - Building Excellence](#-golden-tree-enterprises---building-excellence)
  - [📸 Website Preview](#-website-preview)
  - [📖 Table of Contents](#-table-of-contents)
  - [🚀 Project Overview](#-project-overview)
  - [✨ Key Features](#-key-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Folder Structure](#-folder-structure)
  - [🌍 Page Details](#-page-details)
    - [1. Main Page (`index.html`)](#1-main-page-indexhtml)
    - [2. FAQ Page (`FAQ.html`)](#2-faq-page-faqhtml)
    - [3. Terms of Service (`TOS.html`)](#3-terms-of-service-toshtml)
  - [🖥️ Technical Implementation \& Animations](#️-technical-implementation--animations)
  - [🚀 Installation \& Local Development](#-installation--local-development)
  - [📬 Contact \& Location Details](#-contact--location-details)
  - [📄 License \& Copyright](#-license--copyright)

---

## 🚀 Project Overview

**Golden Tree Enterprises** is a professional, high-performance construction and interior design landing website designed to showcase building excellence, premium craftsmanship, and modern design solutions. With a clean design theme (a combination of Dark Slate `#2c3e50`, Deep Orange `#e67e22`, Gold `#FFD700`, and Light Gray `#f9f9f9`), this platform is optimized to build trust with potential clients, exhibit an extensive service catalog, show proof of past work, and facilitate lead generation.

---

## ✨ Key Features

- **Responsive Design**: Adapts beautifully to desktop, tablet, and mobile screens.
- **Dynamic Header Effect**: Sticky navigation bar that transforms when scrolling down the page.
- **Intersection Observer Counters**: Counters that animate stats dynamically when scrolled into view.
- **Infinite Running Slider**: Continuous horizontal marquee carousel showcasing secondary interior services.
- **Interactive Projects Showcase**: Categorized portfolio cards with smooth zoom overlay details on hover.
- **Web3Forms Integration**: Fully functional contact form sending user queries directly to the business email without backend code.
- **Interactive FAQ Accordion**: Expandable items built for a clean and efficient user experience.
- **Google Maps Integration**: Direct interactive map embed pointing to the physical corporate office.
- **Client Testimonial Carousel**: Clean, rating-enabled client reviews proving reliability.
- **Partner Banner**: Continuous carousel/grid showcasing trusted brands and client collaborations.

---

## 🛠️ Tech Stack

- **Markup & Structure**: HTML5 (semantic elements)
- **Styling & Layout**: CSS3 (custom media queries, grid, flexbox, custom variables, keyframe animations)
- **Interactivity & Logic**: Vanilla JavaScript (ES6+, DOM Manipulation, requestAnimationFrame loop, Intersection Observer API)
- **Email Delivery Service**: [Web3Forms](https://web3forms.com/)
- **Map Provider**: Google Maps Embed API
- **Icons**: Custom SVG Inline Icons

---

## 📁 Folder Structure

Below is the directory mapping of the project repository:

```text
Construction-Golden-Tree-FW/
├── Material/                   # Image Assets
│   ├── Hero.jpg                # Main landing hero background
│   ├── about.jpg               # Team/Experience section image
│   ├── logo.png                # Golden Tree Enterprises Logo
│   ├── p1.jpg, p2.jpeg, p3.jpg # Portfolio showcase project images
│   ├── s1.jpg to s6.jpg        # Core services thumbnail images
│   ├── t1.jpg to t3.jpg        # Testimonial client avatars
│   └── wlogo1.png to wlogo4.png# Partner and collaborator logo images
├── FAQ.html                    # Frequently Asked Questions page
├── TOS.html                    # Terms of Service legal page
├── index.html                  # Core landing page
├── main.js                     # Scroll triggers, counters, marquee animation script
└── style.css                   # Custom responsive styling and design system stylesheet
```

---

## 🌍 Page Details

### 1. Main Page (`index.html`)
The main entry point containing several conversion-optimized sections:
- **Header**: Sticky navigation menu containing links to anchor sections: Home, About, Services, Projects, Testimonials, and Contact.
- **Hero Section**: High-resolution construction backdrop with clear CTA triggers ("Hire Us" & "Our Projects").
- **About Section**: Introduction to the enterprise's 18+ years of industry experience and four core values: *Trusted Craftsmanship*, *Sustainable Building*, *Client-Centric Approach*, and *Future-Ready Designs*.
- **Stats Counter**: Live numbers showcasing **52 Completed Projects**, **8 Awards Won**, **150 Happy Clients**, and **90 Expert Workers**.
- **Services Grid**: Categorized services with image cards, brief descriptions, and hashtags:
  - **Residential Construction** (`#Comfort Crafted`, `#Home Harmony`)
  - **Commercial Construction** (`#Enterprise Engineered`, `#Business Built`)
  - **Interior Designing** (`#Styled Spaces`, `#Design Defined`)
  - **Electrical Designs** (`#Power Precision`, `#Wired Right`)
  - **Project Management** (`#Flawless Flow`, `#Seamless Execution`)
  - **3D Designing** (`#Dimensional Dreams`, `#Visual Clarity`)
- **Other Services Slider**: Infinite horizontal running banner showing: *Fall Ceiling*, *Modular Kitchen*, *Paint & Electricals*, *Marble & Tile*, *Landscape & Gardening*, *Aluminium Sliding*, and *UPVC Sliding*.
- **Projects Portfolio**: Custom cards displaying past works including: *Modern Residence (2019)*, *Downtown Office Complex (2021)*, and *Heritage Building Restoration (2025)*.
- **Testimonials Section**: Five-star ratings and testimonials from verified clients (Ajay Pattnaik, Snehalata Samal, and Ramakanta Sahu).
- **Contact Form**: Secure entry fields with drop-down menus processing submissions via `Web3Forms`.
- **Location Map**: Large interactive map frame to guide visitors to the corporate office.
- **Worked With Slider**: Brand-partnership logos showcasing collaborator firms.

### 2. FAQ Page (`FAQ.html`)
A standalone helper page designed to resolve immediate buyer friction by listing detailed answers about project timelines, licensing, custom designs, and green building strategies.

### 3. Terms of Service (`TOS.html`)
Legal guidelines and agreement documents detailing payment terms, client responsibilities, governing laws, liability limitations, and IP protection rights.

---

## 🖥️ Technical Implementation & Animations

### 1. Header Scroll Effect
Changes opacity and applies shadows as the user scrolls beyond 100px:
```javascript
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
```

### 2. Infinite Horizontal Running Slider
Seamless loop translation using duplicated inner HTML and `requestAnimationFrame`:
```javascript
function scrollSlider() {
  scrollAmount += speed;
  if (scrollAmount >= slider.scrollWidth / 2) {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(scrollSlider);
}
```

### 3. Stats Counter Intersection Observer
Animate counters strictly when they appear on-screen to optimize performance:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
```

---

## 🚀 Installation & Local Development

To run this website locally on your computer:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Construction-Golden-Tree-FW.git
   ```
2. **Navigate into the Project Folder**:
   ```bash
   cd Construction-Golden-Tree-FW
   ```
3. **Run Locally**:
   Simply double-click the `index.html` file to open it in your browser, or run a simple local web server:
   - Using VS Code: Right-click `index.html` and select **"Open with Live Server"**.
   - Using Python: 
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your web browser.

---

## 📬 Contact & Location Details

For any project inquiries, complaints, or consultation scheduling:

| Detail Type | Information |
| :--- | :--- |
| 📍 **Corporate Office Address** | Plot No- 858/1300, Canal Road, Infront of Santoshi Vihar, Bhubaneswar-751006, Odisha, India |
| 📞 **Phone Numbers** | +91 9861970008, +91 9090098899 |
| ✉️ **Inquiry Email** | goldentreeenterprisesinquiry@gmail.com |
| ✉️ **Support/Complaint Email** | goldentreeenterprisescomplaint@gmail.com, goldentreeenterprises786@gmail.com |
| 🌐 **Instagram Handle** | [@goldentreeenterprise](https://www.instagram.com/goldentreeenterprise) |

---

## 📄 License & Copyright

All content, designs, and code are &copy; **2025 Golden Tree Enterprises**. All rights reserved. 
Unauthorized duplication, distribution, or commercial reuse of code/assets without formal agreement is prohibited under the Terms of Service.
