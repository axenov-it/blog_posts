import React from "react";
import PropTypes from "prop-types";
import Button from "./components/Button";
import Link from "./components/Link";

function Btn({ type, className, style, title, href }) {
  switch (type) {
    case "button": {
      return <Button className={className} style={style} title={title} />;
    }

    case "link": {
      return (
        <Link className={className} style={style} title={title} href={href} />
      );
    }

    default:
      return null;
  }
}

Btn.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Btn;
