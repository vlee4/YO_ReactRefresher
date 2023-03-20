import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

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

export default Header;
