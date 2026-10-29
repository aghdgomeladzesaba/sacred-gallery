# Application Development Best Practices

## 1. Project Organization
- Keep React components in src/components.
- Keep application pages in src/pages.
- Store settings and configuration in src/data.
- Store images and other static assets in public.
- Use reusable components to avoid repeated code.

## 2. React Development
- Build applications using React and Vite.
- Use npm to manage dependencies and scripts.
- Use React Router with HashRouter for navigation.
- Keep components small, readable, and organized.

## 3. UI and Design
- Use DaisyUI and Tailwind CSS for responsive interfaces.
- Create custom DaisyUI themes for consistent branding.
- Use consistent colors, typography, and spacing.
- Design for both desktop and mobile devices.
- Add subtle animations to improve the experience.
- Maintain accessible text contrast and image descriptions.

## 4. Application Settings
- Store application settings in settings.json.
- Keep the application title and Analytics ID configurable.
- Use an enableAnalytics boolean to control tracking.
- Keep analytics disabled unless explicitly enabled.

## 5. Navigation and User Experience
- Provide clear navigation using a hamburger menu.
- Include an About page.
- Use descriptive button labels.
- Keep the interface simple and easy to navigate.

## 6. Testing and Deployment
- Use npm run dev for local development.
- Test navigation, images, and responsive layouts.
- Run npm run build before deploying.
- Deploy production files to Firebase Hosting.
- Verify the live website after deployment.

## 7. Future Improvements
- Reuse the Sacred Gallery design principles.
- Continue improving accessibility and performance.
- Keep code maintainable and well documented.
- Test new features before publishing.
