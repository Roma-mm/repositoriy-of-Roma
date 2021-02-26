import {rerenderEntireTree} from './../render'


   let images = [
    <img src="http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1"/>,
    <img src="https://cdn.igromania.ru/mnt/news/5/b/3/c/9/d/94851/e03ca27c542f8409_1920xH.jpg"/>,
    <img src="https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg"/>,
    <img src="https://cs7.pikabu.ru/post_img/2018/10/21/10/1540137624119237107.jpg"/>,
    <img src="https://92.img.avito.st/640x480/9494408792.jpg"/>,
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU"/>,
   ]
   
  export let state = {
      profilePage:{
        postData: [
          {id: 1, text: "Hi, i'll eat Jerry" , likes: '12'},
          {id: 2, text: 'wait!', likes: '15' },
        ],
      },
    
      dialogPage: {
        dialogData: [
          {img: images[0] , name: "Tolik", way: "/dialogs/1"},
          {img: images[1] , name: "Vasya", way: "/dialogs/2"},
          {img: images[2] , name: "Masha", way: "/dialogs/3"},
          {img: images[3] , name: "Lida", way: "/dialogs/4"},
          {img: images[4] , name: "Stepan", way: "/dialogs/5"},
          {img: images[5] , name: "Homer", way: "/dialogs/6"},
        ],
        messages: [
          {id: 1, text: "Hello nigger" },
          {id: 2, text: "What you say about my mom?" },
          {id: 3, text: "Ye ye ye" },
          {id: 4, text: "Stop. This is police!!!" },
          {id: 5, text: "Runaway niggers!!!" },
          {id: 6, text: "facking cops!!!" },
        
        ]
      },
        friends: [
        {name: "Tolik", img: images[0]},
        {name: "Ebolik", img: images[1]},
        {name: "Andrew", img: images[2]},
      ]
     
  }
  export let addPost = (par) => {
   
     state.profilePage.postData.push({id:3, text: par, likes: Math.floor(Math.random() * 30 )});
     rerenderEntireTree(state);
  }
  
  export default state;