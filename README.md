# Work Trip Calculator

A sleek and user-friendly calculator for managing work-related travel expenses in Finland. This tool helps employees track their business trips, mileage, and related expenses with ease.

![Work Trip Calculator Interface](/project.png)

## Features

- **Dual Trip Types**

  - Domestic trips within Finland (km korvaus)
  - International travel support

- **Comprehensive Trip Details**
  - Personal information input
  - Trip purpose documentation
  - Starting point address entry
  - Precise date and time selection
  - Vehicle registration tracking
  - Mileage recording
  - Passenger count tracking
  - Meal allowance calculation

## Usage

1. Select your trip type (domestic/international)
2. Fill in the required information:

   - Name and trip purpose
   - Starting location
   - Trip dates and times
   - Vehicle details and kilometers driven
   - Number of passengers
   - Meal provisions

3. Click "Create matkalasku" to generate your expense report

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technologies

- Built with Svelte 5
- Modern responsive design

## URL Parameters

The calculator supports the following URL parameters for pre-filling form data:

- `type`: Trip type (`domestic` or `international`)
- `name`: Traveler's name
- `purpose`: Purpose of the trip
- `start`: Starting location
- `startDate`: Trip start date (YYYY-MM-DD format)
- `startTime`: Trip start time (HH:mm format)
- `endDate`: Trip end date (YYYY-MM-DD format)
- `endTime`: Trip end time (HH:mm format)
- `vehicle`: Vehicle registration number
- `km`: Distance traveled in kilometers
- `passengers`: Number of passengers
