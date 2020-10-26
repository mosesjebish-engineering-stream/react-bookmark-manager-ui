import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";


class CreateGroup extends React.Component {


    componentDidMount() {
        // Simple POST request with a JSON body using fetch

    }


    constructor(props) {
        super(props);
        this.state =   {
            groupName: "Enter Group Name",
            createdBy: "Jebish Moses",
            adminInfoList: [
                "Jebish Moses"
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleApplication = this.handleApplication.bind(this);
    }

    handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([{
                groupName: this.state.groupName,
                createdBy: this.state.createdBy,
                adminInfoList: [
                    "Jebish Moses"
                ]
            }])
        };
        fetch('http://localhost:7443/api/bookmarks/createGroup', requestOptions)
            .then(response => response.json())
            .then(data => this.setState());
    }

    handleApplication(event) {
        this.setState({groupName: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <div>
                            <InputLabel htmlFor="application-name">Group name</InputLabel>
                            <Input id="application-name" aria-describedby="my-helper-text" onChange={this.handleApplication}/>
                            <FormHelperText id="my-helper-text">Enter the application Name.</FormHelperText>
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

export default CreateGroup;