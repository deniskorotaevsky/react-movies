// import logo from "../logo512.png";
import React from "react";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f1335bd1&s=matrix')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.Search
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <main className="container content">
                        {items.map(item => (
                            <div className="block" key={item.Title}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={item.Poster} />
                                    </div>
                                    <div className="card-box">
                                        <span className="card-title">{item.Title}</span>
                                        <div className="card-footer">
                                            <span>{item.Type}</span>
                                            <span>{item.Year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </>
            )
        }
    }
}

export default Main;