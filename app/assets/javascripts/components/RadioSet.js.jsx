// props:
// name for group name
// labels as array [ labelOne, labelTwo ]
// callback that accepts name and values

class RadioSet extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
  }
  render(){
    return(
      <div className="radio hidden-radio">
        <label>
          {this.props.labels[0]}
          <input type="radio" name={this.props.name} value="true" />
        </label>
        <label>
          {this.props.labels[1]}
          <input type="radio" name={this.props.name} value="false" />
        </label>
      </div>
    );
  }
}
