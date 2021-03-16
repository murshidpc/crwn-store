import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from '../../redux/directory/directory.selector';

//scss
import './directory-menu.style.scss';


const DirectorytMenu = ({sections}) => {
      return(
        <div className="directory-menu">
           {sections.map(({id, ...otherSectionProps}) => (
               <MenuItem key={id} {...otherSectionProps}/>
           ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(DirectorytMenu);