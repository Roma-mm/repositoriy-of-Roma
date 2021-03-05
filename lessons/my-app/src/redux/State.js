
let store = {
  
  rerenderEntireTree() {
    console.log('state changed');
  },
  
  _state: {
   
    profilePage: {
      postData: [
        { id: 1, text: "Hi, i'll eat Jerry", likes: '12' },
        { id: 2, text: 'wait!', likes: '15' },
      ],
      newPostText: 'aaaaaaaa'
    },

    dialogPage: {
      dialogData: [
        {  name: "Tolik", way: "/dialogs/1" },
        {  name: "Vasya", way: "/dialogs/2" },
        {  name: "Masha", way: "/dialogs/3" },
        {  name: "Lida", way: "/dialogs/4" },
        {  name: "Stepan", way: "/dialogs/5" },
        {  name: "Homer", way: "/dialogs/6" },
      ],
      messages: [
        { id: 1, text: "Hello nigger" },
        { id: 2, text: "What you say about my mom?" },
        { id: 3, text: "Ye ye ye" },
        { id: 4, text: "Stop. This is police!!!" },
        { id: 5, text: "Runaway niggers!!!" },
        { id: 6, text: "facking cops!!!" },

      ]
    },
    friends: [
      { name: "Tolik",   },
      { name: "Ebolik",  },
      { name: "Andrew",  },
    ]

  },
  getState () {
    return this._state
  },
  addPost() {

    this._state.profilePage.postData.push({ id: 3, text: this._state.profilePage.newPostText, likes: Math.floor(Math.random() * 30) });
    this._state.profilePage.newPostText = '';
    this.rerenderEntireTree();
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  updatePost(newText) {

    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree();
  },
};

  window.store = store;

  export default store;