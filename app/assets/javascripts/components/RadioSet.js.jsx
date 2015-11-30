// props:
// name for group name
// labels as array [ labelOne, labelTwo ]
// callback that accepts name and values

class RadioSet extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    $(React.findDOMNode(this)).find('input:checked').parent('label').addClass("active-radio");
  }
  handleClick(){
    $(React.findDOMNode(this)).find('input:not(:checked)').parent('label').removeClass("active-radio");
    $(React.findDOMNode(this)).find('input:checked').parent('label').addClass("active-radio");
    this.props.callback(this.props.name, $(React.findDOMNode(this)).find('input:checked').val());
  }
  render(){
    return(
      <div className="radio hidden-radio">
        <label>
          {this.props.labels[0]}
          <input defaultChecked={this.props.checked == 'metric' ? true : false } type="radio" onClick={this.handleClick} name={this.props.name} value="first" />
        </label>
        <label>
          {this.props.labels[1]}
          <input defaultChecked={this.props.checked == 'metric' ? false : true } type="radio" onClick={this.handleClick} name={this.props.name} value="second" />
        </label>
      </div>
    );
  }
}
