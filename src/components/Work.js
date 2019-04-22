import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import CompanyIcon from 'material-ui/svg-icons/social/domain';
import ActivitiesIcon from 'material-ui/svg-icons/action/account-box';
import PositionIcon from 'material-ui/svg-icons/action/face';
import PeriodIcon from 'material-ui/svg-icons/action/date-range';
import Divider from 'material-ui/Divider';
import WorkIcon from 'material-ui/svg-icons/action/work';

const getJobs = (worksData) => {
    const jobsItems = [];
      worksData.forEach((val, index) => {
      jobsItems.push(<list key={index}><ListItem primaryText={val.company} leftIcon={<CompanyIcon />} /><ListItem primaryText={"Position:"+val.position} leftIcon={<PositionIcon />} /><ListItem primaryText={"Activities:"+val.activities} leftIcon={<ActivitiesIcon />} /><ListItem primaryText={"Period:"+val.period} leftIcon={<PeriodIcon />} /></list>);
      jobsItems.push(<Divider key={index + val}/>);
    })
    return jobsItems;
}

export default class WorkComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    const worksData = this.props.data;
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="WORK EXPERIENCE"
          subtitle=""
          avatar={<WorkIcon />}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label=""
          />
        </CardText>
        <CardTitle title="Professional Experience" subtitle="Last 3 Jobs" expandable={true} />
        <CardText expandable={true}>
            {getJobs(worksData)} 
        </CardText>
      </Card>
    );
  }
}