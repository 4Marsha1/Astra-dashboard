import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Home from './containers/Home';


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home />
            </div>
        </Provider>
    );
}

export default App;
