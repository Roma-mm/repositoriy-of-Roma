const add_message = "add_message";
const update_message = "update_message";
export const addMessageActionCreator = () => ({type: add_message});
export const updateMessageCreator = (text) => ({type: update_message, newText: text});
const dialogReducer = (state, action) => {
    if (action.type === add_message) {
        state.messages.push({id: 7, text: state.newMessage});
        state.newMessage = '';
      } else if (action.type === update_message) {
        state.newMessage = action.newText;
      }
};

export default dialogReducer;