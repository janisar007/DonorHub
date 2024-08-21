import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";

const Homepage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && (
        <span style={{ display: "none" }}>{toast.error(error.payload)}</span>
      )}
      {loading ? <Spinner /> : <h1>Home page</h1>}
    </>
  );
};

export default Homepage;
