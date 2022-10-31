import React, { useEffect, useState } from "react";
import "./OurStaff.scss";
import Staff from "./Staff";
import loading from "../../images/loading.gif";

export default function OurStaff() {
  const [staffs, setStaffs] = useState([]);
  const [clear, setClear] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.jsonbin.io/v3/b/636200c62b3499323bf27f20";

  const fetchStaffs = () => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
        "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
      }
    })
      .then(res => res.json())
      .then(data => {
        setStaffs(data.record);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (clear === true) {
      setStaffs([]);
    } else {
      fetchStaffs();
    }
  }, [clear]);

  return (
    <section className="container">
      <h2>Our Staff</h2>
      {isLoading && <div className="loading">
        <img src={loading} alt="loading" />
      </div>
      }
      <div className="our-staff">
        {!isLoading && staffs && staffs.map(staff => <Staff key={staff.id} staff={staff} />)}
      </div>
      <button
        onClick={() => setClear(!clear)}
        className="button"
      >{clear ? "Get all" : "Clear all"}</button>
    </section>
  )
}
