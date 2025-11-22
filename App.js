// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* nested structure */

/*
<div id="parent">
<div id="child1">
<h1>H1</h1>
<h2>H1</h1>
</div>
<div id="child">
<h1>H1</h1>
<h2>H1</h1>
</div>
</div>
*/

const heading = React.createElement("div",
    { id: "parent" },
    [React.createElement("div",
        { id: "child" },
        [React.createElement("h1",
            {}, "hellow h1!"
        ), React.createElement("h2",
            {}, "hellow h2!"
        )]
    ),
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1",
            {}, "hellow h1!"
        ), React.createElement("h2",
            {}, "hellow h2!"
        )]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);