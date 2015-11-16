class Settings extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="well">
        <div className="form-group">
          <label className="col-lg-2 control-label">Units of measure</label>
          <div className="col-lg-10">
            <div className="radio">
              <label>
                <input type="radio" name="true" value="true" checked="" />
                Metric
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="false" value="false" />
                US Standard
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
