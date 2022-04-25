import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            style={{
                width: "100%",
                marginBottom: "5px",
                lineHeight: "inherit",
                border: "none",
            }}
        >
            <button
                style={{
                    width: "100%",
                    position: "relative",
                    textAlign: "left",
                    padding: "0px",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    cursor: "pointer",
                }}
                onClick={toggle}
                type="button"
            >   <>{props.title}{!isShowing ? <KeyboardArrowDownIcon sx={{
                 fontSize: 'large', paddingTop:'12px'
            }} /> : <KeyboardArrowUpIcon sx={{
                 fontSize: 'large', paddingTop:'12px'
            }} />}</></button>
            <div style={{ display: isShowing ? "block" : "none", padding: "0px" }}>{props.content}   </div>
            {/* <div
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            /> */}
        </div>
    );
}
