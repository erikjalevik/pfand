import { createStore, combineReducers } from 'redux'

import collectionReducer from './collectionReducer'
import testReducer from './testReducer'

// This creates a rootReducer function. The initial state for data subtree is initialised by its reducer.
const rootReducer = combineReducers({
  collections: collectionReducer,
  testCounter: testReducer
});

export default createStore(rootReducer);
