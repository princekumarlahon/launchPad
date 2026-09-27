---
name: Orbital Pulse
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#bdc2ff'
  on-tertiary: '#131e8c'
  tertiary-container: '#7c87f3'
  on-tertiary-container: '#081486'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bdc2ff'
  on-tertiary-fixed: '#000767'
  on-tertiary-fixed-variant: '#2f3aa3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# LaunchPad Design System — Orbital Pulse

> **Project Reference**: `projects/17008334584366828357`  
> **Aesthetic Profile**: Aerospace-grade telemetry & mission-critical orchestration SaaS  
> **Visual Theme**: Glassmorphism with Technical Precision Minimalist Surfaces (Dark Mode)

---

## 1. Brand & Style Philosophy

The visual language bridges deep-space exploration with clinical developer tooling—evoking precision, low-latency command, absolute operational reliability, and pioneering energy.

* **Environment**: Deep void dark canvases (`#0B0F19` / `#0B1326`) emulate atmospheric exit, reducing eye strain across multi-monitor control centers while preserving high contrast for dense data visualization.
* **Luminance & Radiance**: Controlled electric violet and neon cyan emissions simulate instrumentation readouts, optical data relays, and telemetry locks without degrading readability.
* **Surface Integrity**: Multi-layered frosted glass panels (`backdrop-filter: blur(16px)`), hairline translucent boundaries (`rgba(255, 255, 255, 0.08)` to `0.16`), and directional specular edge highlights create a physical sense of structural instrument housings mounted over deep visual layers.

---

## 2. Color Palette & Tokens

### 2.1 Core Accent Architecture

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Electric Ion Purple | `#A855F7` | Primary action points, active telemetry links, system health overrides, micro-interactions |
| **Primary Hover / Focus** | Bright Ion Lavender | `#C084FC` | Hover and interactive focus states |
| **Primary Grounding** | Deep Violet Base | `#7E22CE` | Base grounding, active toggle track |
| **Secondary** | Radiant Neon Cyan | `#38BDF8` | Incoming signals, live transport layers, throughput metrics, real-time mission telemetry |
| **Tertiary** | Deep Spectral Violet | `#818CF8` | Operational staging, sub-system grouping, analytical secondary series, metadata categorization |
| **Neutral Base** | Slate Nebula / Void Black | `#0F172A` / `#0B0F19` | Layered surface matrix and deep canvas base floor |

### 2.2 Semantic & Surface Tokens (Material 3 Dark Palette)

#### Surfaces & Backgrounds
* **Background Canvas**: `#0B1326` (Void Blue-Black)
* **Surface Dim**: `#0B1326`
* **Surface**: `#0B1326`
* **Surface Bright**: `#31394D`
* **Surface Container Lowest**: `#060E20`
* **Surface Container Low**: `#131B2E`
* **Surface Container**: `#171F33`
* **Surface Container High**: `#222A3D`
* **Surface Container Highest**: `#2D3449`
* **Surface Variant**: `#2D3449`

#### Content & Typography Colors
* **On Surface (High Contrast)**: `#DAE2FD`
* **On Surface Variant (Muted)**: `#CFC2D6`
* **On Background**: `#DAE2FD`
* **Inverse Surface**: `#DAE2FD`
* **Inverse On Surface**: `#283044`

#### Primary Tokens
* **Primary**: `#DDB7FF`
* **On Primary**: `#490080`
* **Primary Container**: `#B76DFF`
* **On Primary Container**: `#400071`
* **Inverse Primary**: `#842BD2`
* **Primary Fixed**: `#F0DBFF`
* **Primary Fixed Dim**: `#DDB7FF`
* **On Primary Fixed**: `#2C0051`
* **On Primary Fixed Variant**: `#6900B3`

#### Secondary Tokens
* **Secondary**: `#7BD0FF`
* **On Secondary**: `#00354A`
* **Secondary Container**: `#00A6E0`
* **On Secondary Container**: `#00374D`
* **Secondary Fixed**: `#C4E7FF`
* **Secondary Fixed Dim**: `#7BD0FF`
* **On Secondary Fixed**: `#001E2C`
* **On Secondary Fixed Variant**: `#004C69`

#### Tertiary Tokens
* **Tertiary**: `#BDC2FF`
* **On Tertiary**: `#131E8C`
* **Tertiary Container**: `#7C87F3`
* **On Tertiary Container**: `#081486`
* **Tertiary Fixed**: `#E0E0FF`
* **Tertiary Fixed Dim**: `#BDC2FF`
* **On Tertiary Fixed**: `#000767`
* **On Tertiary Fixed Variant**: `#2F3AA3`

#### Outlines & Feedback
* **Outline**: `#988D9F`
* **Outline Variant**: `#4D4354`
* **Surface Tint**: `#DDB7FF`
* **Error**: `#FFB4AB`
* **On Error**: `#690005`
* **Error Container**: `#93000A`
* **On Error Container**: `#FFDAD6`

---

## 3. Typography Hierarchy

### 3.1 Font Families

| Classification | Font Family | Google Fonts Fallback | Applied Scope |
| :--- | :--- | :--- | :--- |
| **Display & Headlines** | `Plus Jakarta Sans` | `sans-serif` | Hero banners, strategic headers, mission telemetry titles |
| **Body & UI Controls** | `Inter` | `sans-serif` | Parameter grids, configuration trees, system modals, paragraphs, button text |
| **Technical Readouts** | `JetBrains Mono` | `monospace` | Raw coordinate streams, timestamps, payload IDs, API keys, tabular figures |

### 3.2 Type Scale Specifications

| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Plus Jakarta Sans | 56px (`3.5rem`) | 700 (Bold) | 64px | `-0.03em` |
| `display-mobile` | Plus Jakarta Sans | 36px (`2.25rem`) | 700 (Bold) | 44px | `-0.02em` |
| `headline-lg` | Plus Jakarta Sans | 36px (`2.25rem`) | 600 (Semi-Bold) | 44px | `-0.02em` |
| `headline-lg-mobile` | Plus Jakarta Sans | 28px (`1.75rem`) | 600 (Semi-Bold) | 36px | `-0.01em` |
| `headline-md` | Plus Jakarta Sans | 24px (`1.5rem`) | 600 (Semi-Bold) | 32px | `-0.01em` |
| `headline-sm` | Plus Jakarta Sans | 20px (`1.25rem`) | 600 (Semi-Bold) | 28px | `0em` |
| `title-md` | Inter | 16px (`1.0rem`) | 600 (Semi-Bold) | 24px | `-0.005em` |
| `body-lg` | Inter | 16px (`1.0rem`) | 400 (Regular) | 24px | `0em` |
| `body-md` | Inter | 14px (`0.875rem`)| 400 (Regular) | 20px | `0em` |
| `body-sm` | Inter | 12px (`0.75rem`) | 400 (Regular) | 16px | `0.01em` |
| `label-md` | JetBrains Mono | 13px (`0.8125rem`)| 500 (Medium) | 18px | `0.02em` |
| `label-sm` | JetBrains Mono | 11px (`0.6875rem`)| 500 (Medium) | 14px | `0.04em` |

### 3.3 Typographic Rules
* **Tabular Figures**: Numeric readouts must leverage `font-feature-settings: "tnum"` / tabular numbers across all dynamic metrics.
* **Header Kerning**: Headings enforce negative tracking (`-0.01em` to `-0.03em`) for a solid, cohesive lockup.
* **Micro Badges**: Micro labels (`label-sm`) render uppercase with positive tracking (`0.04em`) to ensure legibility on dark glass backgrounds.

---

## 4. Spacing, Elevation & Shapes

### 4.1 Spacing Scale
* `space-xs`: `0.25rem` (4px)
* `space-sm`: `0.5rem` (8px)
* `space-md`: `1.0rem` (16px)
* `space-lg`: `1.5rem` (24px)
* `space-xl`: `2.5rem` (40px)
* `gutter`: `1.5rem` (24px)
* `margin`: `2.0rem` (32px)

### 4.2 Rounded Radii
* `sm`: `0.25rem` (4px)
* `DEFAULT`: `0.5rem` (8px)
* `md`: `0.75rem` (12px)
* `lg`: `1.0rem` (16px)
* `xl`: `1.5rem` (24px)
* `full`: `9999px` (Pills & capsules)

### 4.3 Elevation & Glassmorphism
* **Atmospheric Canvas (Level 0)**: `#0B0F19` with subtle deep radial gradient.
* **Glass Panel Surface (Level 1)**: `rgba(15, 23, 42, 0.65)` with `backdrop-filter: blur(16px)` and translucent boundary border: `rgba(255, 255, 255, 0.08)` bottom/sides, `rgba(255, 255, 255, 0.16)` top light incidence border.
* **Floating Overlays & Modals (Level 2)**: `rgba(30, 41, 59, 0.8)` with `backdrop-filter: blur(24px)` and `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6)`.
* **Primary Luminous Radiance**: `box-shadow: 0 0 20px rgba(168, 85, 247, 0.25), 0 0 40px rgba(168, 85, 247, 0.1)`.
* **Secondary Telemetry Radiance**: `box-shadow: 0 0 15px rgba(56, 189, 248, 0.3)`.

---

## 5. UI Component Guidelines

* **Primary Rocket Button**: Full capsule (`border-radius: 9999px`) in Electric Purple (`#A855F7`), white text, backed by purple ambient bloom (`0 0 24px rgba(168, 85, 247, 0.4)`).
* **Secondary HUD Action**: Glass capsule filled with `rgba(15, 23, 42, 0.6)`, wrapped in translucent border (`rgba(168, 85, 247, 0.4)`), text `#F8FAFC`, hover neon cyan border switch (`#38BDF8`).
* **Badges & Status Chips**: Pill-shaped (`9999px`), micro-compact enclosures displaying `label-sm` monospace text with pulsing 6px radial status dot:
  * Neon Cyan (`#38BDF8`): Nominal / Active telemetry
  * Electric Violet (`#A855F7`): System staging
  * Crimson (`#F43F5E`): Trajectory anomalies
* **Inputs & Form Controls**: Corner radius `0.5rem` (8px), low-tier glass background (`rgba(15, 23, 42, 0.75)`), hairline border (`rgba(255, 255, 255, 0.1)`). Focus state: `#A855F7` with electric violet glow ring.
