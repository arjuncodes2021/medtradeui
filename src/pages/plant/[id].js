import Layout from "../../components/Layout/Layout";
import styles from "../plant/plant.module.css";
import Accordian from "../../components/Accordian/Accordian";

import InfoIcon from "@material-ui/icons/Info";
// import Tooltip from '@material-ui/material/Tooltip';
// import IconButton from '@material-ui/material/IconButton';
// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const Plant = ({ plant }) => {
    //  console.log('This is the plant:', plant)

    return (
        <Layout>
            <div className={styles.container}>
                {/* <div className={styles.container_left}>
                    <div className={styles.overview_panel}>
                        <h1 className={styles.overview_name}>Botanical Name</h1>
                    </div>
                </div> */}
                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        {/* You've clicked on */}
                        <div className={styles.details_panel_heading}>
                            You&apos;ve clicked on
                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Scientific Name</div>
                            <div className={styles.details_panel_value}>
                                {plant?.originalSerchSynonymName}
                            </div>
                            {/* <div className={styles.details_panel_value}>{plant.drugNamesList[0]}</div> */}
                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Taxon Status</div>
                            <div className={styles.details_panel_value}>
                                {plant?.taxonStatus}
                            </div>
                            {/* <div className={styles.details_panel_value}>
                                {plant.officialNamesList[0]}
                            </div> */}
                        </div>
                        <div className={styles.details_panel_row}>
                            <Tooltip title="A global nomenclatural indexing and reference service for medicinal plants aimed at those involved in global health, regulation and research.">
                                <div className={styles.details_panel_label}>MPNS Page</div>
                            </Tooltip>
                            <div className={styles.details_panel_value}>
                                {<a href={`https://mpns.science.kew.org/mpns-portal/plantDetail?plantId=${plant?.kewDBMatchTable ? plant?.kewDBMatchTable?.kewNamesId : ''}&dbs=${(plant?.kewDBMatchTable ? plant?.kewDBMatchTable?.kewConceptDb : '')}`} target="_blank" rel="noreferrer">
                                    Click here
                                </a>}
                            </div>
                            {/* <div className={styles.details_panel_value}>
                                {plant.officialNamesList[0]}
                            </div> */}
                        </div>
                        <div className={styles.details_panel_row}>
                            <Tooltip title="POWO is an international collaborative programme that has as a primary aim to make available digitized data of the world’s flora gathered from the past 250 years of botanical exploration and research.  It delivers information on the taxonomy, identification, images, distribution, traits, threat status, molecular phylogenies and uses of vascular plants worldwide. The data are sourced from the Royal Botanic Gardens, Kew as well as its partners and collaborators who generously contribute data and make it openly accessible on POWO.">
                                <div className={styles.details_panel_label}>POWO Page</div>
                            </Tooltip>
                            <div className={styles.details_panel_value}>

                                {<a href={`https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:${plant?.kewDBMatchTable ? plant?.kewDBMatchTable?.kewConceptIpniId : ''}`} target="_blank" rel="noreferrer">
                                    Click here
                                </a>}
                            </div>
                            {/* <div className={styles.details_panel_value}>
                                {plant.officialNamesList[0]}
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        <div className={styles.details_panel_heading}>
                            Trade Name Information{<Tooltip title="Goraya and Ved, 2015. Medicinal Plants in India : An assessment of their Demand and Supply, ICFRE and NMPB, New Delhi.">
                                <InfoIcon fontSize='small' />
                            </Tooltip>}

                        </div>
                        <div className={styles.tdi_details_panel_row}>
                            <div className={styles.details_panel_label}>Scientific Name</div>
                            <div className={styles.details_panel_label}>
                                High Volume Trade
                            </div>
                            <div className={styles.details_panel_label}>Part Used</div>
                            <div className={styles.details_panel_label}>Trade Name</div>
                        </div>
                        <div className={styles.tdi_details_panel_row}>
                            <div className={styles.details_panel_value}>
                                {plant?.taxonNameList?.scientificName}
                            </div>
                            <div className={styles.details_panel_value}>
                                {plant?.tradeDetailsList?.length > 0
                                    ? plant?.tradeDetailsList[0]?.high_volume_trade
                                    : ""}
                            </div>
                            <div className={styles.details_panel_value}>
                                {plant?.tradeDetailsList.length > 0
                                    ? plant?.tradeDetailsList[0]?.part_used
                                    : ""}
                            </div>
                            <div className={styles.details_panel_value}>
                                {plant?.tradeDetailsList?.length > 0
                                    ? plant?.tradeDetailsList[0]?.trade_name
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        <div className={styles.details_panel_heading}>
                            Botanical Information{<Tooltip title="Royal botanical Gardens, Kew.">
                                <InfoIcon fontSize='small' />
                            </Tooltip>}
                        </div>

                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>
                                Scientific Name
                            </div>
                            <div className={styles.details_panel_value}>
                                {plant.taxonNameList.scientificName}
                            </div>
                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Taxon Status</div>
                            <div className={styles.details_panel_value}>
                                {plant?.taxonNameList?.taxonStatus}
                            </div>
                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>
                                Other Scientific Names (Synonyms)
                            </div>

                            <div className={styles.details_panel_value}>
                                <Accordian
                                    title={
                                        plant?.taxonSynonymsList?.length > 1
                                            ? plant?.taxonSynonymsList[0]
                                            : plant?.taxonSynonymsList[0]
                                    }
                                    content={plant?.taxonSynonymsList
                                        .slice(1)
                                        .map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                />
                            </div>

                            {/* <div className={styles.details_panel_value}>
                                {plant?.taxonSynonymsList.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        <div className={styles.details_panel_heading}>
                            <a href="https://cdn.ayush.gov.in/wp-content/uploads/2021/03/Ayurvedic-Pharmacopoeia-of-India-part-1-volume-IX.pdf" target="_blank" rel="noreferrer">{`API (Ayurvedic Pharmacopoeia of India) Information`}{<Tooltip title="API (Ayurveda Pharmacoepia of India) published by Government of India.">
                                <InfoIcon fontSize='small' />
                            </Tooltip>}</a>

                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Drug Names</div>
                            <div className={styles.details_panel_value}>
                                {plant?.drugNamesList.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>
                            {/* <div className={styles.details_panel_value}>{plant.drugNamesList[0]}</div> */}
                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Official Names</div>
                            <div className={styles.details_panel_value}>
                                {plant?.officialNamesList.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>
                            {/* <div className={styles.details_panel_value}>
                                {plant.officialNamesList[0]}
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        <div className={styles.details_panel_heading}>
                            Vernacular Name Information{<Tooltip title="Indian Medicinal Plants Database, TDU.">
                                <InfoIcon fontSize='small' />
                            </Tooltip>}

                        </div>
                        <div className={styles.details_panel_row}>
                            <div className={styles.cni_details_panel_row_language}>
                                Language
                            </div>
                            <div className={styles.cni_details_panel_row_common_names}>
                                Name
                            </div>
                        </div>
                        {plant?.commonNamesList?.length > 0
                            ? plant?.commonNamesList.map((item) => (
                                <div
                                    key={item?.languageName}
                                    className={styles.details_panel_row}
                                >
                                    <div style={{ flex: 1 }}>{item?.languageName}</div>
                                    <div style={{ flex: 2 }}>
                                        <Accordian
                                            title={
                                                item?.commonName?.length > 1
                                                    ? item?.commonName[0]
                                                    : item?.commonName[0]
                                            }
                                            content={item?.commonName.slice(1).map((name, index) => (
                                                <div key={index}>{name}</div>
                                            ))}
                                        />
                                    </div>
                                </div>
                            ))
                            : ""}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Plant;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(
        `http://medtrade.staging.metastringfoundation.org/plantdetails/${params.id}`
    );

    const plant = await res.json();

    return {
        props: {
            plant,
        },
    };
};
