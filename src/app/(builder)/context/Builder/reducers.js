export default function reducers(data, action) {
  switch (action.type) {
    case 'added': {
      return [...data, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return data.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return data.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}