import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  const fetchData = () => {
    if (dataType) {
      const root = `https://swapi.dev/api/${dataType}/`;
      fetch(root)
        .then(res => res.json())
        .then(data => setData(data))
    } else setData(null)
  };

  useEffect(fetchData, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
