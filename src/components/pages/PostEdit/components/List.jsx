import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function List({ fields, onChange, classCheckboxName }) {
  return fields.map((field) => (
    <Item
      key={field.name}
      {...field}
      onChange={onChange}
      classCheckboxName={classCheckboxName}
    />
  ));
}

List.propTypes = {
  fields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  classCheckboxName: PropTypes.string,
};

export default List;
