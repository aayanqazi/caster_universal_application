import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


export default function Modals() {
    console.log("props" , this.props)
    return (
         <Popover
          open={this.state.openNext}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.leftRequestClose}
        >
          <Menu onItemTouchTap={(menuItem,event,index)=> this.props.getNewsfromSource(event.ref)}>
            <MenuItem ref="sport" primaryText="Sports" />
            <MenuItem ref="buisness" primaryText="Buisness" />
            <MenuItem ref="entertainment" primaryText="Entertainment" />
            <MenuItem ref="gaming" primaryText="Gaming" />
            <MenuItem ref="general" primaryText="General" />
            <MenuItem ref="music" primaryText="Music" />
            <MenuItem ref="politics" primaryText="Politics" />
            <MenuItem ref="science-and-nature" primaryText="Science And Nature" />

          </Menu>
        </Popover>
            )
}


//  <Picker.Item label="Wirtschafts Woche" value="wirtschafts-woche" />
//                                     <Picker.Item label="Business Insider" value="business-insider" />
//                                     <Picker.Item label="Time" value="time" />
//                                     <Picker.Item label="BBC Sport" value="bbc-sport" />
//                                     <Picker.Item label="BBC News" value="bbc-news" />
//                                     <Picker.Item label="CNN" value="cnn" />
//                                     <Picker.Item label="ESPN" value="espn" />
//                                     <Picker.Item label="ESPN Cric Info" value="espn-cric-info" />
//                                     <Picker.Item label="Google News" value="google-news" />
//                                     <Picker.Item label="New Scientist" value="new-scientist" />
//                                     <Picker.Item label="Hacker News" value="hacker-news" />