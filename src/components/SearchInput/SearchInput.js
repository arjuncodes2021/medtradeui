import { SearchRounded } from "@material-ui/icons";
import styles from "../SearchInput/SearchInput.module.css";
import { useState, useRef } from "react";//
import { forwardRef } from "react";


// eslint-disable-next-line react/display-name
const SearchInput = forwardRef((props, ref) => {
    return (
        <div className={styles.wrapper}>
            <SearchRounded color="inherit" />
            <input ref={ref} className={styles.input} {...props} />
        </div>
    );
});

export default SearchInput;
