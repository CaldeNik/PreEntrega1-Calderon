import styles from 'App.module.css';
import { ButtonComponent } from './components';

function App() {
  
  const isBlue = true;

  return (
    <div className={isBlue ? styles.blue : styles.customClass}>
      <p>Bienvenidos a React!</p>
      <button onClick={() => {console.log("Click")}}>Click Me</button>
    </div>
  );
}

export default App;
