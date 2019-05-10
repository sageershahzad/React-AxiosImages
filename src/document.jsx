import React from 'react';
import Segment from './segment';



class Document extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (postition) => { this.setState({ lat: postition.coords.latitude }); },
            (err) => { this.setState({ errorMessage: err.message }); }
        );

    }

    render() {
        return (
            <div>
                {/* <div className="ui placeholder segment"> */}
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon"></i>
                        No Any doc are listed for this customer.
                </div>
                    <div className="ui primary button">Add Document</div>
                </Segment>
                {/* </div> */}

                {/* <div className="ui placeholder segment"> */}
                <Segment>
                    <h4 className="ui header">For your info</h4>
                    <p>
                        A quick brown forx jumps over the lazy dog!
                </p>
                    <div>
                        <h2> Latitude: {this.state.lat} </h2>

                        <h2> Error: {this.state.errorMessage} </h2>
                    </div>
                </Segment>
                {/* </div> */}

            </div>

        )
    }
}

export default Document;
