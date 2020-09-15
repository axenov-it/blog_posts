import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Pagination(props) {
  const { page, limit, onChange } = props;

  useEffect(() => {
    onChange(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePagination = (event) => {
    const name = event.target.name;

    if (name === "paginationBtnLeft" && page > 1) {
      onChange(page - 1, limit);
    }

    if (name === "paginationBtnRight") {
      onChange(page + 1, limit);
    }

    if (name === "paginationSelect") {
      onChange(page, event.target.value);
    }
  };

  return (
    <div className={styles.pagination}>
      <input
        name="paginationBtnLeft"
        type="button"
        onClick={onChangePagination}
        className={styles.pagination__btnLeft}
        defaultValue={"<<"}
      />

      <span className={styles.pagination__page}>{page}</span>

      <input
        name="paginationBtnRight"
        type="button"
        onClick={onChangePagination}
        className={styles.pagination__btnRight}
        defaultValue={">>"}
      />

      <select
        name="paginationSelect"
        onChange={onChangePagination}
        value={limit}
        className={styles.pagination__select}
      >
        <option className={styles.pagination__option}>12</option>
        <option className={styles.pagination__option}>24</option>
        <option className={styles.pagination__option}>36</option>
      </select>
    </div>
  );
}

export default Pagination;
