MainLayout = React.createClass({
    render(){
        return(
            <div className="MainLayout">
                <div className="container">

                    <main>
                        {this.props.content}
                    </main>
                </div>
            </div>
        );
    }
});