import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/reducers/reducers';
import Form from './components';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;