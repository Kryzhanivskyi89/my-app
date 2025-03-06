// import React from 'react'

// const usersList = document.getElementById("users");
// const board = document.getElementById("board");
// const userMessage = document.getElementById("msg_txt");
// const userName = document.getElementById("msg_name");
// const sendButton = document.getElementById("msg_btn");

// // const socket = io();
// const messages = [];
// const LIMIT_MESSAGES = 10;

// const render = (body, elements) => {
//   body.innerHTML = "";
//   const fragment = document.createDocumentFragment();

//   elements.forEach(element => {
//     fragment.appendChild(element);
//   });

//   body.appendChild(fragment);
// };

// const renderListOfMessages = ({ name, message }) => {
//   const divName = document.createElement("DIV");
//   divName.className = "alert alert-primary col-md-3";
//   divName.textContent = name;

//   const divMessage = document.createElement("DIV");
//   divMessage.className = "alert alert-dark col-md-9";
//   divMessage.textContent = message;

//   const divWrapper = document.createElement("DIV");
//   divWrapper.className = "row";

//   divWrapper.appendChild(divName);
//   divWrapper.appendChild(divMessage);

//   if (messages.unshift(divWrapper) > LIMIT_MESSAGES) {
//     messages.pop();
//   }

//   render(board, messages);
// };

// const renderListOfUsers = data => {
//   const userElement = Object.values(data).map(user => {
//     const li = document.createElement("LI");
//     li.classList.add("list-group-item");
//     li.textContent = user;
//     return li;
//   });
//   render(usersList, userElement);
// };

// const pressEnterKey = e => {
//   if (e.keyCode === 13) {
//     sendUserMessage();
//   }
// };

// const sendUserMessage = () => {
//   let name = userName.value;
//   const message = userMessage.value;

//   if (message === "" || name === "") {
//     return;
//   }

//   // socket.emit("message", {
//   //   message,
//   //   name
//   // });

//   userMessage.value = "";
//   userMessage.focus();
// };

// sendButton.addEventListener("click", sendUserMessage);
// userMessage.addEventListener("keyup", pressEnterKey);

// socket.on("user", renderListOfUsers);
// socket.on("message", renderListOfMessages);


export const Chat = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h1>Andrew chat</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="nav-header">Любі гості чату</p>
            <ul id="users" className="list-group mb-3"></ul>
          </div>
          <div className="col-md-9">
            <div className="row mb-3">
              <input
                id="msg_name"
                className="col-md-3 form-control"
                placeholder="Ваш нік"
                value=""
              />
              <input
                id="msg_txt"
                className="col-md-6 form-control"
                placeholder="Введіть повідомлення"
              />
              <button
                type="button"
                id="msg_btn"
                className="col-md-2 offset-md-1 btn btn-primary"
              >
                Send
              </button>
            </div>
            <div id="board"></div>
          </div>
        </div>
    </div>
    </section>
  )
}
