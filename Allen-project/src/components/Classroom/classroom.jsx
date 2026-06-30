import { useEffect, useState } from "react";
import classroomImg from "./classroom.jpg";
import "./classroom.css";

export default function Classroom() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedCenters, setUpdatedCenters] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.allen-live.in/ecomm-bff/api/v1/centers");
        if (!response.ok) throw new Error("Failed to fetch centers");

        const result = await response.json();
        const centers = result?.data?.centers || [];

        if (isMounted) {
          setData(result);
          setUpdatedCenters(centers);
        }
      } catch (error) {
        console.error("Failed to load classroom data:", error);
        if (isMounted) {
          setData(null);
          setUpdatedCenters([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  function filter(event) {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    const centers = data?.data?.centers || [];
    const filtered = centers.filter((center) =>
      center.name.toLowerCase().includes(value)
    );

    setUpdatedCenters(filtered);
  }

  return (
    <div>
      <div className="classroom-div" style={{ backgroundImage: `url(${classroomImg})` }}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{data?.data?.title || "Classroom"}</h1>
            <h1>{data?.data?.subtitle || ""}</h1>
          </>
        )}
        <input
          className="input-box"
          type="text"
          placeholder="Search City Here"
          value={inputValue}
          onChange={filter}
        />
      </div>
      <br />
      <div className="campus-container">
        {updatedCenters.length > 0 ? (
          updatedCenters.map((e) => (
            <CampusDetails
              key={e.facility_id}
              name={e.name}
              state={e.state}
              campus_count={e.campus_count}
              display_url={e.display_url}
            />
          ))
        ) : (
          !loading && <p>No centers found.</p>
        )}
      </div>
    </div>
  );
}

function CampusDetails({ name, campus_count, state, display_url }) {
  return (
    <div className="campus-card">
      <img src={display_url} alt={name} />

      <div>
        <p>{name}</p>
        <p>{state}</p>
        <p>{campus_count}</p>
      </div>
    </div>
  );
}