import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import AcademicIcon from 'material-ui/svg-icons/social/school';
import DegreeIcon from 'material-ui/svg-icons/navigation/check';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const getAcademic = (academicData) => {
    const academicItems = [];
      academicData.forEach((val, index) => {
      academicItems.push(<List key={index}><ListItem primaryText={val.institution} leftIcon={<AcademicIcon />}/><ListItem primaryText={val.studyType} leftIcon={<DegreeIcon />} /></List>);
      academicItems.push(<Divider key={index + val}/>);
    })
    return academicItems;
}

export default class AcademicComponent extends React.Component {

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
    const academicData = this.props.data;
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="ACADEMIC"
          subtitle=""
          avatar={<AcademicIcon />}
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
        <CardTitle title="" subtitle="" expandable={true} />
        <CardText expandable={true}>
            {getAcademic(academicData)}
        </CardText>
      </Card>
    );
  }
}