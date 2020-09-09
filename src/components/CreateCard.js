import React from 'react';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }

     render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
     }
    }

    export default CreateCard;