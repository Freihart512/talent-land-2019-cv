import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import PersonIcon from 'material-ui/svg-icons/social/person-outline';
import {List, ListItem} from 'material-ui/List';
import DegreeIcon from 'material-ui/svg-icons/navigation/check';
import Divider from 'material-ui/Divider';

const getProfiles = (aboutData) => {
    const profileItems = [];
      aboutData.profiles.forEach((val, index) => {
      profileItems.push(<list key={index}><ListItem primaryText={val.network} leftIcon={<img src={val.logo} role="presentation"/>}  /><ListItem primaryText={<a href={val.url}>{val.url}</a>} leftIcon={<DegreeIcon />}  /></list>);
      profileItems.push(<Divider key={index + val}/>);
    })
    return profileItems;
}

export default class AboutComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }


  render() {
    const aboutData = this.props.data;
    return (
      <Card >
        <CardHeader
          title="ABOUT"
          subtitle={aboutData.name}
          avatar={<PersonIcon />}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={aboutData.legalName} subtitle={aboutData.tittle}/>
        <CardText>
          <img src={aboutData.photo} role="presentation"/>        
          {getProfiles(aboutData)}  
        </CardText>
      </Card>
    );
  }
}