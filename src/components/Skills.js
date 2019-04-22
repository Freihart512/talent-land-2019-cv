import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import SkillIcon from 'material-ui/svg-icons/action/build';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const getSkills = (skillsData) => {
    const skillsItems = [];
      skillsData.forEach((val, index) => {
      skillsItems.push(<Chip key={index} style={styles.chip}>{val}</Chip>);
    })
    return skillsItems;
}





export default class SkillsComponent extends React.Component {

    

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
    const skillsData = this.props.data;
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="SKILLS"
          subtitle=""
          avatar={<SkillIcon />}
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
            <div style={styles.wrapper}>
                {getSkills(skillsData)} 
                {/*<Chip
                style={styles.chip}
                >
                JavaScript
                </Chip>     
                <Chip
                style={styles.chip}
                >
                C#
                </Chip>  
                <Chip
                style={styles.chip}
                >
                ASP .Net
                </Chip>  
                <Chip
                style={styles.chip}
                >
                Jenkins
                </Chip>  
                <Chip
                style={styles.chip}
                >
                DevOps
                </Chip>  
                <Chip
                style={styles.chip}
                >
                PHP
                </Chip>  
                <Chip
                style={styles.chip}
                >
                JQuery
                </Chip>     
                <Chip
                style={styles.chip}
                >
                Agile Scrum
                </Chip>                                                                                                                       */}
            </div>


        </CardText>
      </Card>
    );
  }
}