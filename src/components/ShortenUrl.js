import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import {any} from "prop-types";

class ShortenUrl extends React.Component {
    componentDidMount() {
        // Simple POST request with a JSON body using fetch

    }

    constructor(props) {
        super(props);
        this.state = {
            shortUrl: any,
            longUrl: 'Enter the url'


        };

        this.handleUrl = this.handleUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            headers: {'Content-Type': 'application/json'},
        };
        fetch(`http://localhost:7443/api/bookmarks/shortenUrl?url=` + this.state.url + '&type=group', requestOptions)
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log("Data value is", data.shortUrl)
                this.setState({shortUrl: data.shortUrl});
                this.setState({longUrl: data.longUrl})

            })
    }

    handleUrl(event) {
        this.setState({url: event.target.value});
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            shortUrl: event.target.shortUrl,
            longUrl: event.target.longUrl
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <div className="px-8 py-8">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                            Create your card
                        </div>
                        <div>
                            <InputLabel htmlFor="application-name">Long Url</InputLabel>
                            <Input id="application-name" aria-describedby="my-helper-text" defaultValue={this.state.longUrl} onChange={this.handleChange}/>
                            <FormHelperText id="my-helper-text">Enter the application Name.</FormHelperText>
                        </div>
                        <div>
                            <InputLabel htmlFor="application-url">Short URL</InputLabel>
                            <Input id="short-url" aria-describedby="my-helper-text" defaultValue={this.state.shortUrl} onChange={this.handleChange}/>
                            <FormHelperText id="my-helper-text">Enter the application URL.</FormHelperText>
                        </div>
                        <input className="-moz-focusring" type="submit" value="Submit"/>
                    </div>


                </div>
            </form>
        );
    }
}

export default ShortenUrl;