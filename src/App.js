import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EditorPage from './components/EditorPage';

/**
 * Renders the main App component.
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <EditorPage />
    </div>
  );
}

export default App;
