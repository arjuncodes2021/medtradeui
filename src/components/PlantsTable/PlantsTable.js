import styles from "./PlantsTable.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PlantsTable = ({ data }) => {

    //Pagination Logic + Display
    useEffect(() => {
        setPageNumber(0);
    }, [data])
    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 10
    const pagesVisited = pageNumber * itemsPerPage

    const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage).map((item) => {
        return (
            <Link
                href={`/plant/${item.plantId}`}
                key={item.plant_id}
                passHref={true}
            >
                <div key={item.plant_id} className={styles.row} >
                    <div className={styles.scientificName}>{item.scientificName[0]}</div>

                    <div className={styles.tradeName}>{item.tradeName[0]}</div>

                    <div className={styles.matchedWith}>{item.matchedWith.length > 1 ? `${item.matchedWith[0]}, ${item.matchedWith[1]}` : item.matchedWith[0]}</div>

                </div>
            </Link>
        )
    })
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_scientificName}>
                    <div>Scientific Name</div>
                </button>
                <button className={styles.heading_tradeName}>
                    <div>Trade Name </div>
                </button>
                {/* <button className={styles.heading_part_used}>
                    <div>API Names </div>
                </button> */}
                <button className={styles.heading_matchedWith}>
                    <div>Search Matches</div>
                </button>
            </div>
            {<div >
                {displayItems}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={styles.paginationBttns}
                    previousLinkClassName={styles.previousBttn}
                    nextLinkClassName={styles.nextBttn}
                    disabledClassName={styles.paginationDisabled}
                    activeClassName={styles.paginationActive}
                />
            </div>}
            {/* <div display='none'><br/></div> */}
        </div>
    );
};

export default PlantsTable;
