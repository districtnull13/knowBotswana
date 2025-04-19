# knowBotswana
Pono Ya Botswana - Know Botswana Website

Pono Ya Botswana ("Vision of Botswana" in Setswana) is an informational website dedicated to showcasing Botswana’s rich history, culture, geography, and modern achievements. Built with HTML5, CSS3, and external JavaScript, it aims to educate students, tourists, and global audiences about Botswana’s heritage while promoting eco-tourism and cultural pride.
Table of Contents

About
Features
Website Structure
Technologies
Setup Instructions
Testing
Contributing
Future Enhancements
License
Contact

About
Founded in 2025, Pono Ya Botswana serves as a dynamic platform to celebrate Botswana’s Tswana culture, iconic landscapes like the Okavango Delta, and contributions to conservation and diplomacy. The website targets:

Students (15–25 years) studying history, geography, or cultural studies.
Tourists (25–55 years) interested in eco-tourism and Botswana’s heritage.
Local Residents seeking to explore their country’s identity.

The mission is to provide accurate, engaging content that fosters cultural pride among Batswana and inspires curiosity worldwide. As stated by founder Donovan Ntsima:  

“We aim to share Botswana’s story with the world, one connection at a time.”

Features

Informational Content: Detailed pages covering Botswana’s history, culture, geography, economy, education, and tourism.
Interactive Elements: 
Responsive dropdown navigation menu powered by external JavaScript.
Contact form with validation for user feedback and story submissions.
Planned features like image galleries and fact rotators.


African-Themed Design: Earthy tones (browns, greens, oranges) and Ubuntu font for a culturally resonant aesthetic.
Mobile-First Responsiveness: Optimized for desktops, tablets, and smartphones.
Social Media Integration: Links to Instagram, X, and Facebook for community engagement.

Website Structure
The site is organized into intuitive categories, as shown in the site map:
Home
├── About Botswana
│   ├── Geography & Nature
│   ├── Map & Climate
│   ├── Economy
│   ├── Modern Botswana
├── History & Politics
│   ├── History
│   ├── Presidency & Government
│   ├── Major Events
├── People & Culture
│   ├── Ethnic Groups
│   ├── Artistic & Historical Figures
│   ├── Culture & More
│   ├── Music & Dance
│   ├── Cuisine
│   ├── Religion & Beliefs
│   ├── Languages
├── Lifestyle & Activities
│   ├── Sports
│   ├── Education
│   ├── Tourism
├── Botswana & The World
│   ├── Diaspora & Global Influence
│   ├── Foreign Relations
│   ├── Trade & Partnerships
│   ├── Conservation Efforts
│   ├── Cultural Exports
├── Get Involved
│   ├── Contact/About
│   ├── Resources

Key pages include:

Home: Introduction with a hero image and quick facts.
Contact/About: Form for feedback and details about the project’s mission.
Geography & Nature: Highlights landscapes like the Kalahari Desert and Okavango Delta.
People & Culture: Celebrates ethnic diversity (Tswana, San, Kalanga, etc.).

Technologies

Frontend:
HTML5: Semantic structure for accessibility.
CSS3: Custom stylesheet with media queries for responsiveness.
JavaScript: External js/script.js for interactivity (e.g., form validation, smooth scrolling).


Tools:
Visual Studio Code: Development and debugging.
Figma: Wireframe design.
Canva: Graphics creation (logo, banners).
Git/GitHub: Version control and hosting via GitHub Pages.
Chrome DevTools: Testing and optimization.


Resources:
Unsplash: Royalty-free images of Botswana’s landscapes and culture.
Google Fonts: Ubuntu for typography.



Setup Instructions
To run the website locally or deploy it:

Clone the Repository:
git clone https://github.com/districtnull13/knownBotswana.git
cd knownBotswana


Project Structure:
knownBotswana/
├── index.html
├── contact.html
├── geography.html
├── ... (other HTML files)
├── styles.css
├── js/
│   ├── script.js
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   ├── contact-collage.jpg
│   ├── about-team.jpg
│   ├── facebook-icon.jpg
│   ├── twitter-icon.jpg
│   ├── instagram-icon.jpg


Run Locally:

Use a local server (e.g., Python’s HTTP server):python -m http.server 8000


Open http://localhost:8000 in a browser.


Deploy to GitHub Pages:

Push changes to the main branch:git add .
git commit -m "Deploy Know Botswana website"
git push origin main


Enable GitHub Pages in repository settings, selecting the main branch.
Access the site at https://districtnull13.github.io/knownBotswana.



Testing
The website was rigorously tested to ensure functionality and compatibility:

Browser Compatibility: Tested on Chrome, Firefox, Safari, and Edge. Verified dropdown menu and form validation work consistently.
Mobile Devices: Tested on iPhone 13 (iOS) and Google Pixel 6 (Android). Confirmed responsive navigation and form functionality.
Functionality:
JavaScript features (e.g., smooth scrolling, form validation) tested for accuracy.
Contact form validates name, email, and message fields, displaying errors or success messages.


Performance: Lighthouse scores >85 for performance, accessibility, and SEO.
Accessibility: Alt text for images; tested with NVDA screen reader.

Screenshots from testing are available in the screenshots/ folder (if added).
Contributing
We welcome contributions to Pono Ya Botswana! To contribute:

Fork the Repository: Click the "Fork" button on GitHub.
Clone Your Fork:git clone https://github.com/your-username/knownBotswana.git


Create a Branch:git checkout -b feature/your-feature


Make Changes: Add content (e.g., new pages, images) or improve code (e.g., JS enhancements).
Commit and Push:git add .
git commit -m "Add your feature"
git push origin feature/your-feature


Submit a Pull Request: Describe your changes in the PR.

Contribution Ideas:

Guest articles or photos about Botswana’s culture or conservation.
JavaScript features (e.g., image galleries, interactive maps).
Accessibility improvements (e.g., WCAG 2.1 compliance).

Future Enhancements

Dynamic Content: Integrate a CMS (e.g., Contentful) for user-submitted stories.
Interactive Features: Add a JS-based map of Botswana’s landmarks or a fact rotator on the homepage.
Email Integration: Use EmailJS to send contact form submissions to fcse23-018@thuto.bac.ac.bw.
Multilingual Support: Include Setswana translations for local users.
Analytics: Implement Google Analytics to track visitor behavior.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
Connect with us:

Email: Submit feedback via the Contact page.
Social Media:
Instagram
X
Facebook


GitHub Issues: Report bugs or suggest features via Issues.

Join our community to share Botswana’s story with the world!
