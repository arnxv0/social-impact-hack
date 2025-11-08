# California Homeless Youth Project (CHYP) Dashboard

A trauma-informed intake system that displays comprehensive service history for homeless youth accessing support services.

## 🌟 Features

### Trauma-Informed Design

- **Compassionate Interface**: Youth-friendly language with no jargon
- **Privacy Focused**: Simple authentication without intimidating credentials
- **Transparent Communication**: Clear explanations of why youth qualify for benefits
- **Progress Tracking**: Visual representation of service advocacy and support

### Core Components

1. **Login System**

   - Simple 3-field authentication (Name, Phone, DOB)
   - No password required for ease of access
   - Animated entrance with Framer Motion

2. **Dashboard Overview**

   - Welcome banner with personalized greeting
   - Quick stats cards showing:
     - Total calls made
     - Services contacted
     - Benefits matched
   - Animated counter effects

3. **Call Transcripts Panel**

   - List of past conversations with support staff
   - Sentiment indicators (positive, neutral, needs support)
   - Expandable full transcripts in modal
   - Trauma-informed conversation examples

4. **Service Contacts Timeline**

   - Visual timeline of all services contacted on behalf of youth
   - Status tracking (completed, pending, failed)
   - Detailed notes and next steps
   - Color-coded by status

5. **Eligible Benefits Card**

   - List of benefits youth qualifies for
   - Category-based organization (Housing, Food, Education, Medical, etc.)
   - Plain-language eligibility explanations
   - Application status tracking
   - Quick-start application buttons

6. **Intake Responses Table**
   - All intake questions and answers
   - Clear indication of skipped questions (trauma-informed)
   - Sortable by date
   - Edit capability for updates

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material UI (MUI) v7
- **Animations**: Framer Motion
- **Styling**: Emotion (MUI's styling solution)
- **Routing**: React Router v6
- **State Management**: React Hooks

## 📦 Installation

```bash
# Clone the repository
cd social-impact-hack

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🎮 Demo Usage

### Login Credentials

For demo purposes, you can use any values in the correct format:

- **Full Name**: Any name (e.g., "Jordan Smith")
- **Phone Number**: XXX-XXX-XXXX format (e.g., "408-555-0123")
- **Date of Birth**: Any date

The app uses `Jordan Smith` as the default demo user with pre-populated service history.

### Demo Journey

1. **Login**: Enter demo credentials
2. **Dashboard**: View comprehensive service history
3. **Call Transcripts**: Click on any call to read full conversation
4. **Timeline**: Scroll through services contacted
5. **Benefits**: Review matched benefits and application status
6. **Intake Responses**: See answered and skipped questions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Login.tsx                    # Authentication screen
│   ├── Dashboard.tsx                # Main dashboard layout
│   ├── QuickStatsCard.tsx          # Animated stats cards
│   ├── CallTranscriptsPanel.tsx    # Call history with transcripts
│   ├── ServiceContactsTimeline.tsx # Service advocacy timeline
│   ├── EligibleBenefitsCard.tsx    # Benefits matching display
│   └── IntakeResponsesTable.tsx    # Intake Q&A table
├── data/
│   └── mockData.ts                 # Mock data and TypeScript interfaces
├── theme.ts                        # MUI theme configuration
├── App.tsx                         # Root component with routing
└── main.tsx                        # Application entry point
```

## 🎨 Design Principles

### Color Scheme

- **Primary Blue** (#2196f3): Trust and safety
- **Success Green** (#4caf50): Positive progress
- **Warning Orange** (#ff9800): Pending actions
- **Error Red** (#f44336): Attention needed
- **Purple Gradient**: Welcoming and modern

### Typography

- **Inter/Roboto**: Clean, readable sans-serif fonts
- **Generous spacing**: Easy reading for all literacy levels
- **Clear hierarchy**: Important information stands out

### Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color combinations
- Clear focus indicators

### Trauma-Informed Features

- ✅ Option to skip uncomfortable questions
- ✅ No threatening or judgmental language
- ✅ Explanation of why information is needed
- ✅ Positive reinforcement throughout
- ✅ Clear next steps and expectations

## 📱 Responsive Design

The dashboard is fully responsive and works on:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Features

1. **Add Mock Data**: Update `src/data/mockData.ts`
2. **Create Component**: Add to `src/components/`
3. **Import in Dashboard**: Use in `Dashboard.tsx`
4. **Style with MUI**: Use theme variables from `theme.ts`

## 🌐 Deployment

```bash
# Build production bundle
npm run build

# Output will be in /dist directory
# Deploy to your preferred hosting (Vercel, Netlify, etc.)
```

## 🎯 Hackathon Demo Tips

1. **Start with Login**: Show simple, non-intimidating authentication
2. **Highlight Timeline**: Demonstrate how system advocates for youth
3. **Show Transcripts**: Emphasize trauma-informed language
4. **Benefits Matching**: Explain automated eligibility determination
5. **Skipped Questions**: Show respect for boundaries

## 📊 Mock Data Overview

The demo includes:

- 3 call transcripts with full conversations
- 10 intake response questions
- 5 service contacts across different agencies
- 8 eligible benefits across 7 categories

## 🤝 Contributing

This project was created for the California Homeless Youth Project hackathon to demonstrate trauma-informed digital services for vulnerable youth populations.

## 📄 License

Created for educational and demonstration purposes.

## 💡 Key Innovations

1. **Service Advocacy Transparency**: Youth can see exactly what's being done to help them
2. **Trauma-Informed Design**: Every interaction considers psychological safety
3. **Plain Language**: No government jargon or confusing terminology
4. **Progress Visualization**: Clear indicators of application status and next steps
5. **Automated Matching**: System identifies benefits youth qualify for automatically

## 🌟 Impact

This dashboard demonstrates how digital tools can:

- Reduce trauma for youth accessing services
- Increase transparency in case management
- Improve service coordination
- Empower youth to understand their options
- Track advocacy efforts on their behalf

---

**Built with ❤️ for youth in need | California Homeless Youth Project © 2025**
