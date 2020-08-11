import React from "react";
import PropTypes from "prop-types";
import LinkRoute from "./components/LinkRoute";
import Btn from "./components/Btn";

function Button({ type, href, onClick, title, className }) {
  switch (type) {
    case "linkRoute":
      return <LinkRoute href={href} title={title} className={className} />;

    default: {
      return <Btn onClick={onClick} title={title} className={className} />;
    }
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
