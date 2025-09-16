# Movie App

A modern React application for browsing and searching movies using The Movie Database (TMDB) API. Features include movie search, popular movie discovery, and a favorites system.

## Features

- **Browse Popular Movies**: View trending and popular movies from TMDB
- **Movie Search**: Search for movies by title with real-time results
- **Favorites System**: Save movies to your favorites list
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for optimal development and build speeds

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with modular stylesheets
- **API**: The Movie Database (TMDB) API
- **Package Manager**: npm

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- TMDB API key (free registration required)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd movie-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Get your TMDB API key:
   - Visit [TMDB API Settings](https://www.themoviedb.org/settings/api)
   - Create a free account if you don't have one
   - Generate an API key

3. Add your API key to the `.env` file:
   ```env
   VITE_TMDB_API_KEY=your_actual_api_key_here
   ```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Individual movie display component
│   └── Nav.jsx         # Navigation component
├── contexts/           # React context providers
│   └── MovieContext.jsx
├── css/               # Stylesheet modules
├── pages/             # Route components
│   ├── Home.jsx       # Main movie browsing page
│   └── Favorites.jsx  # User favorites page
└── services/          # API and external service integrations
    └── api.js         # TMDB API functions
```

## API Integration

The application uses TMDB API for movie data:
- Popular movies endpoint for homepage content
- Search endpoint for movie queries
- All API calls are handled through the `services/api.js` module

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the component framework
