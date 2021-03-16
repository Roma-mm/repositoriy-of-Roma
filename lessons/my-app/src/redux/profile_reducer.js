const add_post = "add_post";
const update_post = "update_post";
export const addPostActionCreater = () => ({type: add_post });
export const updatePostActionCreater = (text) => ({type: update_post, newText: text});
const profileReducer = (state, action) => {
    if (action.type === add_post) {
        state.postData.push({ id: 3, text: state.newPostText, likes: Math.floor(Math.random() * 30) });
        state.newPostText = '';
      } else if (action.type === update_post) {
        state.newPostText = action.newText;
      }
}; 

export default profileReducer;