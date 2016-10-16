// Action Types

const ADD_COLLECTION = 'ADD_COLLECTION'

// Action Creators

export function addCollection(collection) {
  return {
    type: ADD_COLLECTION,
    collection: collection
  }
}

// Reducer

export default function collectionReducer(state = [], action) {
  switch (action.type) {
    case ADD_COLLECTION:
      return state.concat(action.collection);
    default:
      return state;
  }
}
