class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-red-50 border border-red-200 rounded-lg m-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Something went wrong.</h2>
          <p className="text-red-600 mb-4">{this.state.error && this.state.error.toString()}</p>
          <details className="text-left bg-white p-4 rounded border border-red-100 overflow-auto max-h-64">
            <summary className="cursor-pointer text-red-500 font-medium mb-2">Error Details</summary>
            <pre className="text-xs text-red-400 whitespace-pre-wrap">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Components are loaded via script tags in index.html, so they are available in global scope
// We need to assume Header, Hero, etc. are available.

function App() {
  try {
    return (
      <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
        <Header />
        <main className="flex-grow">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-red-600">Something went wrong in the App component.</h2>
            <p className="text-gray-600">{error.message}</p>
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);