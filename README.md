# Wealth Elite - Financial Dashboard

This project is a recreation of a financial dashboard UI, built as a
frontend development assignment. The dashboard is fully responsive and
includes features like dynamic charts, a dark mode toggle, and the
ability to export the view as a PDF. It has also been configured to be
converted into native Android/iOS applications using Capacitor.

**Live Demo:**
[financial-dashboard-s.netlify.app](https://financial-dashboard-s.netlify.app)

**GitHub Repository:**
[github.com/swastikshetty06/financial-dashboard](https://github.com/swastikshetty06/financial-dashboard)

**Resume:** [View
Resume](https://docs.google.com/document/d/1oglL-VDXEf4GA8_ZvxfxaLPEH2-B6hpvityEXZbePJ8/edit?usp=sharing)

## Features

-   **Responsive Design:** The dashboard is fully responsive and
    accessible on mobile, tablet, and desktop devices.
-   **Interactive Charts:** Visual data representation using Chart.js,
    including a bubble chart for client distribution, a mixed bar and
    line chart for SIP business, and a multi-line area chart for monthly
    MIS.
-   **Dark Mode:** A theme toggle allows users to switch between light
    and dark modes for better viewing comfort.
-   **PDF Export:** Users can download a PDF snapshot of the entire
    dashboard with a single click.
-   **Mobile Ready:** Built with Capacitor to enable easy conversion
    into native Android and iOS applications from the same Next.js
    codebase.
-   **Component-Based Architecture:** Developed with reusable React
    components for maintainability and scalability.

## Tech Stack

-   **Framework:** Next.js 15 (App Router)
-   **Styling:** Tailwind CSS
-   **UI Components:** React 19
-   **Charting:** Chart.js with react-chartjs-2
-   **Icons:** Lucide React
-   **PDF Generation:** jsPDF & html2canvas
-   **Mobile Conversion:** Capacitor

## Getting Started

Follow these instructions to set up and run the project on your local
machine.

### Prerequisites

-   Node.js (v18.18.0 or later)
-   npm, yarn, or pnpm

### Installation & Setup

Clone the repository:

``` bash
git clone https://github.com/swastikshetty06/financial-dashboard.git
cd financial-dashboard
```

Install dependencies:

``` bash
npm install
```

Run the development server:

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser to see the result.

## Building for Production and Mobile

### Web Production Build

To create a production-ready build of the web application, run:

``` bash
npm run build
```

This will generate an optimized static site in the `out` folder, which
is ready for deployment.

### Mobile (Android/iOS) with Capacitor

This project is configured to be wrapped into a native mobile app.

Add a platform (run once):

``` bash
# For Android
npx cap add android

# For iOS (macOS required)
npx cap add ios
```

Sync the web build with the native project:

``` bash
npm run build
npx cap sync
```

Open the native project in its IDE:

``` bash
# For Android (opens in Android Studio)
npx cap open android

# For iOS (opens in Xcode)
npx cap open ios
```

From the native IDE, you can build, run, and deploy the app to a
simulator or a physical device.
