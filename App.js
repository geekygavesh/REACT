
// const heading = React.createElement("h1",{id : "heading"},"Hello Dosto");
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// nested  with siblings
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
