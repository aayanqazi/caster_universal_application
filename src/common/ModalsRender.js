import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


export default function Modals() {
    return (
         <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu onItemTouchTap={(menuItem)=> console.log(menuItem)}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
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