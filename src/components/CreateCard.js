import React from 'react';

class CreateCard extends React.Component {


    componentDidMount() {
        // Simple POST request with a JSON body using fetch

    }

    constructor(props) {
        super(props);
        this.state = {
            url: 'Enter the url',
            description: 'Describe the card',
            createdBy: 'Enter user name'
        };

        this.handleUrl = this.handleUrl.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleCreatedBy = this.handleCreatedBy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);

        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([{
                shortUrl: this.state.url,
                longUrl: this.state.url,
                userId: this.state.user,
                description: this.state.description
            }])
        };
        fetch('http://localhost:7443/api/bookmarks/createCard', requestOptions)
            .then(response => response.json())
            .then(data => this.setState());
    }

    handleUrl(event) {
        this.setState({url: event.target.value});
    }

    handleDescription(event) {
        this.setState({description: event.target.value});
    }

    handleCreatedBy(event) {
        this.setState({user: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img src={image.webformatURL} alt="" className="w-full"/> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                            Title
                        </div>
                        <ul>
                            <li>
                                <strong>Url: </strong>
                                <textarea value={this.state.url} onChange={this.handleUrl}/>
                            </li>
                            <li>
                                <strong>Description: </strong>
                                <textarea value={this.state.description} onChange={this.handleDescription}/>
                            </li>
                            <li>
                                <strong>Created By: </strong>
                                <textarea value={this.state.user} onChange={this.handleCreatedBy}/>
                            </li>
                        </ul>
                    </div>

                    <input type="submit" value="Submit"/>

                    <div className="px-6 py-4">
                        {/* {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))} */}
                    </div>
                </div>


                {/* <label>
          Title:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" /> */}
            </form>
        );
    }
}

export default CreateCard;