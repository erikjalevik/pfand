// @flow

// Flow Types

export type Collection = {
  name: string,
  address: string,
  numBottles: number,
  preferredTimes: string
}

export type CollectionAction = {
  type: string,
  payload: ?Collection
}

// Action Types

const ADD_COLLECTION = 'ADD_COLLECTION'

// Action Creators

export function addCollection(collection: Collection): CollectionAction {
  return {
    type: ADD_COLLECTION,
    payload: collection
  }
}

// Initial state

const initialState: Array<Collection> = []

// Reducer

export default function collectionReducer(
  state: Array<Collection> = initialState,
  action: CollectionAction) {

  switch (action.type) {
    case ADD_COLLECTION:
      return state.concat(action.payload)
    default:
      return state
  }
}
