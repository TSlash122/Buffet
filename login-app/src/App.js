
import LoginForm from './LoginForm';

import Home from './Home';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </Router>
    );
}

export default App;
