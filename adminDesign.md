---
name: Clinical Clarity
colors:
surface: '#f7f9fc'
surface-dim: '#d8dadd'
surface-bright: '#f7f9fc'
surface-container-lowest: '#ffffff'
surface-container-low: '#f2f4f7'
surface-container: '#eceef1'
surface-container-high: '#e6e8eb'
surface-container-highest: '#e0e3e6'
on-surface: '#191c1e'
on-surface-variant: '#434655'
inverse-surface: '#2d3133'
inverse-on-surface: '#eff1f4'
outline: '#737686'
outline-variant: '#c3c6d7'
surface-tint: '#0053db'
primary: '#004ac6'
on-primary: '#ffffff'
primary-container: '#2563eb'
on-primary-container: '#eeefff'
inverse-primary: '#b4c5ff'
secondary: '#505f76'
on-secondary: '#ffffff'
secondary-container: '#d0e1fb'
on-secondary-container: '#54647a'
tertiary: '#006242'
on-tertiary: '#ffffff'
tertiary-container: '#007d55'
on-tertiary-container: '#bdffdb'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
primary-fixed: '#dbe1ff'
primary-fixed-dim: '#b4c5ff'
on-primary-fixed: '#00174b'
on-primary-fixed-variant: '#003ea8'
secondary-fixed: '#d3e4fe'
secondary-fixed-dim: '#b7c8e1'
on-secondary-fixed: '#0b1c30'
on-secondary-fixed-variant: '#38485d'
tertiary-fixed: '#6ffbbe'
tertiary-fixed-dim: '#4edea3'
on-tertiary-fixed: '#002113'
on-tertiary-fixed-variant: '#005236'
background: '#f7f9fc'
on-background: '#191c1e'
surface-variant: '#e0e3e6'
typography:
headline-xl:
fontFamily: Inter
fontSize: 40px
fontWeight: '700'
lineHeight: 48px
letterSpacing: -0.02em
headline-lg:
fontFamily: Inter
fontSize: 32px
fontWeight: '600'
lineHeight: 40px
letterSpacing: -0.02em
headline-lg-mobile:
fontFamily: Inter
fontSize: 24px
fontWeight: '600'
lineHeight: 32px
headline-md:
fontFamily: Inter
fontSize: 24px
fontWeight: '600'
lineHeight: 32px
body-lg:
fontFamily: Inter
fontSize: 18px
fontWeight: '400'
lineHeight: 28px
body-md:
fontFamily: Inter
fontSize: 16px
fontWeight: '400'
lineHeight: 24px
label-md:
fontFamily: Inter
fontSize: 14px
fontWeight: '500'
lineHeight: 20px
letterSpacing: 0.05em
caption:
fontFamily: Inter
fontSize: 12px
fontWeight: '400'
lineHeight: 16px
rounded:
sm: 0.25rem
DEFAULT: 0.5rem
md: 0.75rem
lg: 1rem
xl: 1.5rem
full: 9999px
spacing:
base: 8px
xs: 4px
sm: 12px
md: 24px
lg: 40px
xl: 64px
gutter: 24px
margin-mobile: 16px

margin-desktop: 48px

Brand & Style

The brand personality is anchored in trust, precision, and tranquility. Designed for "Smart Clinic," the interface prioritizes patient comfort by reducing cognitive load through a Minimalist and Modern Corporate aesthetic. The goal is to evoke a sense of organized, high-tech healthcare that remains accessible and human.
The design system utilizes heavy whitespace (generous margins and padding) to create a "breathing" interface. This spaciousness reflects the calm atmosphere of a premium clinic. High-quality typography and a restrained color palette ensure that critical medical information is easily scannable and never overwhelming.

Colors

The palette is dominated by a clean, medical-grade environment.

Primary (#2563EB): Used for primary actions, branding, and active states. It represents professional authority.

Background (#F5F7FA): A soft, cool-tinted grey-white that reduces eye strain compared to pure white.

Secondary (#64748B): A muted slate for supporting text and non-critical icons.

Tertiary (#10B981): A "Health Green" used exclusively for success states, available slots, and confirmed appointments.

Surface: Pure white (#FFFFFF) is reserved for cards and containers to pop against the neutral background.

Typography

This design system uses Inter exclusively to leverage its systematic, utilitarian, and highly legible characteristics.

Scale: A mobile-first scaling approach ensures headlines remain legible on small devices.

Weights: Use SemiBold (600) for headlines to maintain hierarchy without appearing aggressive. Medium (500) is reserved for labels and interactive components.

Spacing: Increased line-height (1.5x for body text) is mandatory to satisfy the "spacious" requirement of the brand narrative.

Layout & Spacing

The layout follows a Fluid Grid model with strict adherence to an 8px spatial system.

Grid: On desktop, use a 12-column grid with 24px gutters. On mobile, use a 4-column grid with 16px margins.

Hierarchy: Use the lg (40px) and xl (64px) spacing units to separate major sections, such as "Doctor Profiles" from "Schedule Overview."

Safe Areas: Elements inside white cards should never be closer than 24px (md) to the card edge to maintain the "airy" feel.

Elevation & Depth

Hierarchy is established through Ambient Shadows and tonal layering rather than heavy borders.

Surface Level: The main background is the base layer (#F5F7FA).

Interactive Level: White cards sit on top of the background with a very soft, diffused shadow: box-shadow: 0 4px 20px rgba(37, 99, 235, 0.04). Note the slight blue tint in the shadow to harmonize with the primary color.

Active Level: Hover states for cards should slightly increase the shadow spread and lift the element by 2px (Y-axis) to provide tactile feedback.

Shapes

The shape language is consistently Rounded, specifically using 12px for standard UI cards and containers. This radius is large enough to feel friendly and modern, but sharp enough to maintain a professional medical tone.

Small elements: Buttons and input fields use a slightly smaller radius (8px) to feel more precise.

Avatar/Icons: Use circular (pill-shaped) containers for doctor photos and category icons to soften the overall grid.

Components

Cards: The primary container. Always pure white with a 12px corner radius and ambient shadow. No borders.

Buttons:

Primary: Solid #2563EB with white text. 8px radius. High padding (12px 24px).

Secondary: Transparent background with #2563EB border (1px) and text.

Input Fields: Background should be white with a subtle 1px border in #E2E8F0. Focus state uses a 2px #2563EB border.

Chips: Used for "Specialties" or "Available Times." Light blue background (Primary @ 10% opacity) with Primary colored text.

Lists: Clean rows separated by thin 1px #E2E8F0 lines. Increase vertical padding to 16px per row to avoid crowding.

Calendar/Scheduling: Use the Tertiary Green (#10B981) for "Available" slots and a neutral grey for "Taken." Use high contrast for the selected date
