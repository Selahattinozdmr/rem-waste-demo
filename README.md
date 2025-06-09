# REM Waste Demo - Skip Hire Application

This project is a code challenge solution for REM Waste Company, demonstrating a modern, responsive web application for skip hire services. The application allows customers to select and order skips based on their location, size requirements, and specific waste disposal needs.

## 🚀 Features

- **Location-Based Skip Search**: Displays available skips by postcode and area
- **Interactive Skip Selection**: Choose from various skip sizes with detailed information
- **Skip Size Helper**: Guidance tool to help customers select the right skip size for their needs
- **Smart Filtering**: Filter skips based on specific criteria (on-road placement, heavy waste allowance)
- **Multiple View Options**: Toggle between card and list views for skip selection
- **Responsive Design**: Fully responsive interface that works on all device sizes
- **Progress Tracking**: Visual indication of the user's progress in the booking process
- **Detailed Skip Information**: Comprehensive information about each skip, including size, price, and specifications

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks for state management
- **TypeScript**: For type-safe code
- **Tailwind CSS 4**: For utility-first styling
- **Framer Motion**: For smooth animations and transitions
- **Vite**: For fast development and optimized builds

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v8 or higher)

## 📥 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/selahattinozdmr/rem-waste-demo.git
   cd rem-waste-demo
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📦 Project Structure

```
rem-waste-demo/
├── public/              # Static assets
├── src/
│   ├── assets/          # Application assets
│   ├── components/      # React components
│   │   ├── common/      # Shared components
│   │   └── skip/        # Skip-specific components
│   ├── pages/           # Application pages
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions and API services
├── index.html           # Entry HTML file
├── package.json         # Project dependencies
└── vite.config.ts       # Vite configuration
```

## 🖥️ Application Flow

1. User enters their location (postcode and area)
2. Application displays available skips for the location
3. User can filter and browse different skip options
4. User selects a skip that meets their requirements
5. Summary is displayed with selected skip details
6. User proceeds to the next step of the booking process

## 🧪 Testing

Run tests with:

```bash
pnpm test
```

## 🏗️ Building for Production

Build the application for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 🔄 API Integration

The application integrates with the REM Waste API to fetch skip information based on location:

```typescript
const API_BASE_URL = "https://app.wewantwaste.co.uk/api";
```

## 📝 Code Challenge Requirements

This project was developed as part of a code challenge for REM Waste Company with the following key requirements:

- Create a user-friendly skip selection interface
- Implement filtering capabilities for skip options
- Display detailed information about each skip option
- Allow users to select and proceed with their chosen skip
- Ensure responsive design works across different devices
- Demonstrate clean code structure and modern React practices

## 📄 License

[MIT License](LICENSE)

## 👤 Author

Selahattin

The application integrates with the REM Waste API to fetch skip information based on location:

```typescript
const API_BASE_URL = "https://app.wewantwaste.co.uk/api";
```

},
})

```

```
