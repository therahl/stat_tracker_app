class Settings extends React.Component{
  constructor(props){
    super(props);
    this.weightRadios = this.weightRadios.bind(this);
  }
  weightRadios(){

  }
  render(){
    return(
      <div className="well">
        <form onSubmit={this.handeSubmit} className="form-horizontal">
          <fieldset>
            <legend>Units</legend>
            <div className="form-group">
              <label className="control-label">Girth Measurements</label>
              <div className="c">
                <div className="radio">
                  <label>
                    <input type="radio" name="girth" value="true" />
                    Metric
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="girth" value="false" />
                    US Standard
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Weight</label>
              <div className="col-xs-12">
                <RadioSet callback={this.weightRadios} name='weight' labels={['Metric', 'US Standard']} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
