import React from "react";

class SearchBar extends React.Component {
  state = {
    sw: ""
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.getSearchResults(this.state.sw);
          this.setState({ sw: "" });
        }}
      >
        <input
          type="text"
          className="form-control"
          name="sw"
          placeholder="Type search words and hit enter..."
          value={this.state.sw}
          onChange={e => {
            this.setState({ sw: e.target.value });
          }}
        />
      </form>
    );
  }
}

export default SearchBar;
