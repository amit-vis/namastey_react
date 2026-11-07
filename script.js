// this first exersise
// const heading = React.createElement("h1", {  }, "Hello, World React!");
const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {"id": "child"}, [
        React.createElement("h1", {}, "Hello, World React!"),
        React.createElement("h2", {}, "This is a subheading")
    ]),
    React.createElement("div", {"id": "child2"}, [
        React.createElement("h1", {}, "Hello, World React!"),
        React.createElement("h2", {}, "This is a subheading")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);