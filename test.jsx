var Counter = ReactMeteor.createClass({
    templateName: "Counter",
    handleCommentSubmit: function(counter) {
        Session.set('counter', counter+1);
        this.setState({counter: counter})
    },
    render: function() {
        if(this.state == null)
            this.state = {counter: 0}
        console.log(this.state);
        return (
            <div className="counter">
                <h1>Welcome to Reactjs</h1>
                <CounterShow counter={this.state.counter} />
                <CounterButton onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
var CounterShow = ReactMeteor.createClass({
    render: function() {
        return (
            <div className="counterShow">
                <p>You have pressed the button {this.props.counter} times</p>
            </div>
        );
    }
});
var CounterButton = ReactMeteor.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        Session.setDefault('counter', 1);
        var counter = Session.get('counter');
        this.props.onCommentSubmit(counter);
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="submit" value="Click" />
            </form>
        );
    }
});