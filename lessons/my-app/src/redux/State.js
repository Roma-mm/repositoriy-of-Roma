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
        {  name: "Tolik", way: "/dialogs/1", img:  <img src="https://likee-wiki.com/wp-content/uploads/2019/12/avatarki-v-layk.jpg"/>, },
        {  name: "Vasya", way: "/dialogs/2", img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7ET2aCHBiHsMaBEXjL4IlDILlvrVpuNOuA&usqp=CAU"/>, },
        {  name: "Masha", way: "/dialogs/3", img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU"/>, },
        {  name: "Lida", way: "/dialogs/4", img: <img src="https://92.img.avito.st/640x480/9494408792.jpg"/>, },
        {  name: "Stepan", way: "/dialogs/5", img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxbCEGE7qNof-kTEjqjPNCwa9vTNxuTsB2Q&usqp=CAU"/>, },
        {  name: "Homer", way: "/dialogs/6", img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1m9jTTqhXJ2JYiO-Y4ZC0POEgIKqQDJEE3g&usqp=CAU"/>, },
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
      { name: "Tolik",  img: <img src="https://www.infoniac.ru/upload/medialibrary/08a/08abab5b38db21b57b4fb12bdbcdd4c3.jpg"/>,  },
      { name: "Ebolik", img: <img src="https://topmsg.ru/wp-content/uploads/kot-s-galstukom.jpg"/>, },
      { name: "Andrew", img: <img src="https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg"/>, },
    ]

  },
  getState () {
    return this._state
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action) {
    if (action.type === 'add-post') {
      this._state.profilePage.postData.push({ id: 3, text: this._state.profilePage.newPostText, likes: Math.floor(Math.random() * 30) });
      this._state.profilePage.newPostText = '';
      this.rerenderEntireTree();
    } else if (action.type === 'update-post') {
      this._state.profilePage.newPostText = action.newText;
      this.rerenderEntireTree();
    }
  },
  
};

  window.store = store;

  export default store;