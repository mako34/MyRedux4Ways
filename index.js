import { AppRegistry } from 'react-native';
import App from './App';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('myRedux4ways', () => ReduxApp);
