# Persian/Jalali/Shamsi calendar extension for web browsers

## Overview

A browser extension that provides a convenient Persian (Jalali/Shamsi) calendar right in your browser.

## Features

- Quick date reference while browsing
- Easy-to-use interface
- Lightweight and fast

## Technology Stack

- ReactJS + Typescript + TailwindCSS
- HTML5/CSS3
- Browser Extension APIs
- Moment.js for date conversions

## Development Setup

### Prerequisites

- Node.js v20.18.2 or later
- npm (comes with Node.js)

### Build Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/persian-calendar.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Build the project

   ```bash
   npm run build
   ```

4. Find the built extension in the `dist` directory

Note: The built extension can be loaded as an unpacked extension in your browser's developer mode.

## Installation

### Microsoft Edge

The extension is available on the Microsoft Edge Add-ons store. Install it from [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/persian-calendar/kojcphmdolepklegkdendjhifeablabj).

### Firefox

The extension is available on Firefox Add-ons. Install it from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/persian-jalali-calendar).

### Google Chrome

Currently not available on the Chrome Web Store. To install manually:

1. Download the latest release from [GitHub Releases](https://github.com/MRezaKarimi/persian-calendar/releases/)
2. Extract the downloaded ZIP file
3. Open Chrome and go to `chrome://extensions`
4. Enable "Developer mode" using the toggle in the top-right
5. Click "Load unpacked" and select the `dist` folder from extracted zip file
6. The extension should now appear in your Chrome toolbar

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
