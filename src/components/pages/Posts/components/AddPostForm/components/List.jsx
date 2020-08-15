import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function List({ fields, onChange }) {
  return fields.map((field) => (
    <Item key={field.name} {...field} onChange={onChange} />
  ));
}

List.propTypes = {
  fields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default List;
