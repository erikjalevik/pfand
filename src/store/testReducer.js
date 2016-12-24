// Action Types

const TEST_ACTION = 'TEST_ACTION'

// Action Creators

export function testAction() {
  return {
    type: TEST_ACTION
  }
}

// Reducer

export default (state = 0, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return state + 1;
    default:
      return state;
  }
}
