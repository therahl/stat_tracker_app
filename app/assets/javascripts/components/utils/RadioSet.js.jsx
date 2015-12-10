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
    // $(React.findDOMNode(this)).find('input:checked').parent('label').addClass("active-radio");
    // debugger;
  }
  handleClick(){
    // $(React.findDOMNode(this)).find('input:not(:checked)').parent('label').removeClass("active-radio");
    // $(React.findDOMNode(this)).find('input:checked').parent('label').addClass("active-radio");
    this.props.callback(this.props.name, $(React.findDOMNode(this)).find('input:checked').val());
  }
  render(){
    let metric = this.props.checkedField === 'metric';
    let imperial = this.props.checkedField === 'imperial';
    return(
      <div className="radio hidden-radio">
        <label className={metric ? 'active-radio' : ''}>
          {this.props.labels[0]}
          <input defaultChecked={metric} type="radio" onChange={this.handleClick} name={this.props.name} value="first" />
        </label>
        <label className={imperial ? 'active-radio' : ''}>
          {this.props.labels[1]}
          <input defaultChecked={imperial} type="radio" onChange={this.handleClick} name={this.props.name} value="second" />
        </label>
      </div>
    );
  }
}
