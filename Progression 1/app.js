
// //ReactDOM.render("Hello! I am React via CDN.", container);
// //render("what to render", "where to render")

// //functional component
// const Container = () => {
//     return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning!`,
//     React.createElement(`div`, null, `Let's rock and roll`)
//     );

// }

// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container), container);

class ReactContainer extends ReadableStreamDefaultController.Component{
    //Constructor Here

    render(){
        return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning!`,
        React.createElement(`div`, null, `Let's rock and roll`));
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container), container);