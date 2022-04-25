import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import { useState, useRef, useEffect } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import PlantsTable from "../components/PlantsTable/PlantsTable";
import Router, { useRouter } from "next/dist/client/router";
import  useDebounce from "../hooks/use-debounce";


// import styles from "./PlantsTable.module.css";
// import Link from "next/link";
// import { useState } from "react";
// import ReactPaginate from "react-paginate";

export default function App({ data }) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef();
  const debouncedSearchTerm = useDebounce(keyword, 500);
  const router = useRouter();

  // const onSmallChange = async (e) => {
  //   const query = e.target.value.toLowerCase();

  //   if (e.keyCode == 13 && query.length < 4) {
  //     console.log(e.target.value, "testing");
  //     e.preventDefault();
  //     setKeyword(query);
  //     router.push(`/?searchterm=${query}`)
  //     const res = await fetch(
  //       `http://medtrade.staging.metastringfoundation.org/findstring/${query}`
  //     );
  //     const data = await res.json();
  //     setResults(data);
  //   } else if (e.keyCode == 8 && query.length == 1) {
  //     setResults([]);
  //   }
  // };

  // const onBigChange = async (e) => {
  //   const query = e.target.value.toLowerCase();


  //   if (query.length > 3) {
  //     e.preventDefault();
  //     setKeyword(query);
  //     console.log(query, "testing - 1");
  //     router.push(`/?searchterm=${query}`);
  //     const res = await fetch(
  //       `http://medtrade.staging.metastringfoundation.org/findstring/${query}`
  //     );
  //     const data = await res.json();
  //     setResults(data);
  //   }
  // };

  const queryData = async () => {
    const query = debouncedSearchTerm;
    if (query) {
      // setKeyword(query);


      //   updates value back to serch input
      //   if(searchRef?.current?.value) {
      //   searchRef.current.value = query;
      // }


      router.push(`/?searchterm=${query}`)
      const res = await fetch(
        `http://medtrade.staging.metastringfoundation.org/findstring/${query}`
      );
      const data = await res.json();
      setResults(data);
      // setKeyword(query);
    }
  };

  const handleOnSearch = () => {
    if(searchRef.current.value.length < 4) {
      return;
    }
    setKeyword(searchRef.current.value);
  };

  useEffect(() => {
    queryData();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!searchRef.current.value && router.query.searchterm) {
      searchRef.current.value = router.query.searchterm;
    }
  }, [router.query.searchterm]);

  useEffect(() => {
    setKeyword(router.query.searchterm);
  }, [router.query.searchterm]);

  // console.log('This is the result:', results)


  return (
    <Layout>
      <div className={styles.detailsPanelLabel}>
        {results.length > 0
          ? `Found ${results.length} plant name, herbal drug name entries`
          : ""}
      </div>
      <SearchInput
        placeholder="Search by Scientfic, Trade or Common Name (Himanshu is learning about GIT.)  "
        ref={searchRef}
        // onKeyDown={handleOnSearch}
        onChange={handleOnSearch}
      />
      {/* <button type="button" onClick={handleOnSearch}>Search</button> */}
      <PlantsTable data={results} />
      {/*Implementing PlantsTable component here */}
    </Layout>
  );
}
