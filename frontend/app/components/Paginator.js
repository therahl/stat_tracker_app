import React from 'react';
// expects props:
// max <- total pages
// current <- current page
// handleChange <- page change callback

class Paginator extends React.Component{
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  click(e){
    e.preventDefault();
    if(e.target.name < 1 || e.target.name > this.props.max){return;}
    this.props.handleChange(e.target.name);
  }
  render(){
    let pageNumbers = [(
      <li className={this.props.current === 1 ? 'disabled' : ''}>
        <a href="" name={this.props.current - 1} onClick={this.click}>
          «
        </a>
      </li>
    )];

    let max, min;
    if(this.props.max <= 5){
      min = 1;
      max = this.props.max;
    } else {
      if(this.props.current === this.props.max) {
        max = this.props.max;
        min = this.props.current - 4;
      } else {
        max = this.props.current <= 4 ? 5 : this.props.current + 1;
        min = this.props.current <= 3 ? 1 : this.props.current - 3;
      }
    }
    for(i=min; i <= max; i++){
      let classnames = this.props.current === i ? 'active' : ''
      pageNumbers.push(
        <li className={classnames}><a href="" name={i} onClick={this.click}>{i}</a></li>
      )
    }
    pageNumbers.push(
      <li className={this.props.current === this.props.max ? 'disabled' : ''}><a href="" name={this.props.current + 1} onClick={this.click}>»</a></li>
    )

    return(
      <ul className="pagination pagination-sm">
        {pageNumbers}
      </ul>
    );
  }
}
export default Paginator;
