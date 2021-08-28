import React from 'react';
import './Header.css'

const Header1 = function(props){
    return(
        <div className='header'>
        {props.heading}
      </div>
    )
}

/*class Header extends Component{
    render() {
        return(
            <div className="header">
                Phone Directory
            </div>
        )
    }
}*/

export default Header1;