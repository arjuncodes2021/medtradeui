import Image from "next/image";
import logo from "../../images/kew.svg";
import logo2 from "../../images/tdu_new.png";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';

import styles from "./Layout.module.css";


const Layout = ({ children, title = "Traded Medicinal Plants of India" }) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <head>
                <title>{title}</title>
            </head>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <a>
                        <Link href="http://medtrade-ui.staging.metastringfoundation.org/" passHref={true}>
                            <button>Traded Medicinal Plants of India</button>
                        </Link>
                    </a>
                </div>
                <div className={styles.headerAbout}>
                    <Link passHref={true} href="http://medtrade-ui.staging.metastringfoundation.org/">
                        <Tooltip title="New Search">
                            <SearchIcon />
                        </Tooltip>
                    </Link>
                </div>
                {/* <div className={styles.headerAbout}>
                    <Link passHref={true} href="http://medtrade-ui.staging.metastringfoundation.org/">
                        <button><SearchIcon/></button>
                    </Link>
                </div> */}
                <div className={styles.headerAbout}>
                    <Link passHref={true} href="#">
                        <button>About</button>
                    </Link>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div
                        className={styles.header_tdu}
                        style={{ color: "black", overflow: "hidden" }}
                    >
                        <a href="https://tdu.edu.in/" target="_blank" rel="noreferrer">
                            <Image alt={""} src={logo2} width={200} height={120} />
                        </a>
                    </div>
                    <div className={styles.footerDevelopedBy}>
                        <a
                            href="https://www.metastringfoundation.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Developed by Metastring Foundation
                        </a>
                    </div>
                    <div
                        className={styles.header_kew}
                        style={{ color: "black", overflow: "hidden" }}
                    >
                        <a href="https://www.kew.org/" target="_blank" rel="noreferrer">
                            <Image alt={""} src={logo} width={200} height={120} />
                        </a>
                    </div>
                </div>
                {/* <div className={styles.footerDevelopedBy}>
                    <a
                        href="https://www.metastringfoundation.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Developed by Metastring Foundation
                    </a>
                </div> */}
            </footer>
        </div>
    );
};

export default Layout;
