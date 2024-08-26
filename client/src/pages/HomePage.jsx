import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";
import Layout from "../components/shared/Layout/Layout";

const Homepage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && (
        <span style={{ display: "none" }}>{toast.error(error.payload)}</span>
      )}
      {loading ? <Spinner /> : <h1>Home page</h1>}
    </Layout>
  );
};

export default Homepage;
