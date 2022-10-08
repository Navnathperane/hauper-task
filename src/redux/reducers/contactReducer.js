const initialState = {user:[
  { id: 0, name: "Navnath Perane", email: "peranenavnath@gmail.com", phone: 9325836529 },
  { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
],
deluser:[
  { id: 0, name: "Test", email: "test55@test.com", phone: 666666666 },
]
};


export const contactReducer = (state = initialState.user, action) => {

  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state.user, action.payload];
      console.log(state);
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
      
  }
};
