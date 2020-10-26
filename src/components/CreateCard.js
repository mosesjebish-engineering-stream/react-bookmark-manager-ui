import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";


class CreateCard extends React.Component {


    componentDidMount() {
        // Simple POST request with a JSON body using fetch

    }


    constructor(props) {
        super(props);
        this.state = {
            url: 'Enter the url',
            description: 'Describe the card',
            createdBy: 'Enter user name',
            application: 'Enter the application name',
            tribe: 'Enter the application tribe',
            platform: 'Enter the application platform',
            //********enhance below fields to fetched approved status from user info*********
            approved: true,
            groupDetailInfo: [{
                id: 8,
                groupName: "My Group From UI",
                createdBy: "Jebish Moses",
                adminInfoList: [
                    "Jebish Moses"
                ]
            }],
            userInfoDetails: [{
                userId: "mosesjebish",
                userName: "Jebish Moses",
                permissions: [
                    "admin"
                ]
            }],
            userId: 'Jebish Moses'


        };

        this.handleUrl = this.handleUrl.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlatform = this.handlePlatform.bind(this);
        this.handleTribe = this.handleTribe.bind(this);
        this.handleApplication = this.handleApplication.bind(this);
    }

    handleSubmit(event) {
/*        const alert = useAlert();
        event.preventDefault();*/
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([{
                longUrl: this.state.url,
                userId: this.state.userId,
                description: this.state.description,
                application: this.state.application,
                tribe: this.state.tribe,
                platform: this.state.platform,
                approved: this.state.approved,
                groupDetailInfo: this.state.groupDetailInfo,
                userInfoDetails: this.state.userInfoDetails

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

    handleApplication(event) {
        this.setState({application: event.target.value});
    }

    handleTribe(event){
        this.setState({tribe: event.target.value})
    }

    handlePlatform(event){
        this.setState({platform: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <div>
                            <InputLabel htmlFor="application-name">Application name</InputLabel>
                            <Input id="application-name" aria-describedby="my-helper-text" onChange={this.handleApplication}/>
                            <FormHelperText id="my-helper-text">Enter the application Name.</FormHelperText>
                        </div>
                        <div>
                            <InputLabel htmlFor="application-url">Application URL</InputLabel>
                            <Input id="short-url" aria-describedby="my-helper-text" onChange={this.handleUrl} />
                            <FormHelperText id="my-helper-text">Enter the application URL.</FormHelperText>
                        </div>
                        <div>
                            <InputLabel htmlFor="tribe">Tribe</InputLabel>
                            <Input id="tribe" aria-describedby="my-helper-text" onChange={this.handleTribe}/>
                            <FormHelperText id="my-helper-text">Enter the application Tribe.</FormHelperText>
                        </div>
                        <div>
                            <InputLabel htmlFor="platform">Platform</InputLabel>
                            <Input id="platform" aria-describedby="my-helper-text" onChange={this.handlePlatform}/>
                            <FormHelperText id="my-helper-text">Enter the application platform.</FormHelperText>
                        </div>
                        <div>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input id="description" aria-describedby="my-helper-text" onChange={this.handleDescription}/>
                            <FormHelperText id="my-helper-text">Describe the application.</FormHelperText>
                        </div>
                        <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                            onClick={this.handleSubmit}
                        >
                            Save Changes
                        </button>

                    </div>


                </div>
            </form>
        );
    }
}

export default CreateCard;