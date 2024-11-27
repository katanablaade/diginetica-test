import { v4 as uuidv4 } from 'uuid';

const atributes = {
  state: {
    attributesList: [
      { id: uuidv4() },
      { id: uuidv4() },
      { id: uuidv4() },
      { id: uuidv4() },
      { id: uuidv4() },
      { id: uuidv4() },
    ],
  },
  getters: {
    getAtributes(state) {
      return state.atributes;
    },
  },
};
export default atributes;
