import './App.css';
import { Button, Link} from 'react-aria-components';

function App() {
  return (
    <div className="App">
      <Button aria-label="This a button label">Button text</Button>
      <Link href="" aria-label="This a link label">
        Link text
      </Link>
    </div>
  );
}

export default App;
