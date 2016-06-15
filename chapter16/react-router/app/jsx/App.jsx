//ES6格式，需要ES2015来编译(./babelrc文件中指定es2015编译器)
import React from 'react'
import { render } from 'react-dom'
// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Link>s */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox/messages/123">Inbox</Link></li>
                </ul>

                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
})

const Home = React.createClass({
    render() {
        return (<div>
            HomePage
        </div>)
    }
})

const About = React.createClass({
    render() {
        return (<div>About</div>);
    }
})

const Message = React.createClass({
    getInitialState() {
        return {messageId: 1}
    },
    componentDidMount() {
        this.setState({ messageId: this.props.params.id })
    },
    render() {
        return <h3>Message id is : {this.state.messageId}</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {/* Render the child route component */}
                {this.props.children}
            </div>
        )
    }
})

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}>
                {/* render the message component at /inbox/messages/123 */}
                <Route path="messages/:id" component={Message}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))