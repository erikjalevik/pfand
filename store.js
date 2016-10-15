import { createStore, combineReducers } from 'redux'

import collectionReducer from './collectionReducer'
import testReducer from './testReducer'

// This statement replaces the initial state. The state for each piece of data
// is initialised by its reducer.
const rootReducer = combineReducers({
  collection: collectionReducer,
  testCounter: testReducer
});

export default createStore(rootReducer);
