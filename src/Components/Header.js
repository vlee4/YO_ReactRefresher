import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (

      <header>
        <h1>{title}</h1>
      </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS in JS
// const headingStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     color: 'white', 
//     backgroundColor: 'black'
// }

// class Header extends React.Component{
//     render(){
//         return(
//             <header>
//             <h1>Class Task Tracker!</h1>
//           </header>
//         )
//     }
// }

export default Header