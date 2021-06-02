import { useState } from "react";
import axios from "axios";
import { Input, Button } from "antd";
import Select from "react-select";
const Fish = () => {
  const wilaya = [
    {
      value: "Ain Temouchent",
      name: "Ain Temouchent",
      label: "Ain Temouchent",
    },
    { value: "Alger", name: "Alger", label: "Alger" },
    { value: "Tipaza", name: "Tipaza", label: "Tipaza" },
    { value: "jijel", name: "jijel", label: "jijel" },
    { value: "Annaba", name: "Annaba", label: "Annaba" },
    { value: "Bejaia", name: "Bejaia", label: "Bejaia" },
    { value: "Boumerdes", name: "Boumerdes", label: "Boumerdes" },
    { value: "Chlef", name: "Chlef", label: "Chlef" },
    { value: "El Tarf", name: "El Tarf", label: "El Tarf" },
    { value: "Mostaganem", name: "Mostaganem", label: "Mostaganem" },
    { value: "Oran", name: "Oran", label: "Oran" },
    { value: "Skikda", name: "Skikda", label: "Skikda" },
    { value: "Tizi ouzou", name: "Tizi ouzou", label: "Tizi ouzou" },
    { value: "Tlemcen", name: "Tlemcen", label: "Tlemcen" },
  ];
  const port = [
    { value: "Beni-saf", name: "Beni-saf", label: "Tlemcen" },
    { value: "Bouzedjar", name: "Bouzedjar", label: "Tlemcen" },
    { value: "Alger", name: "Alger", label: "Tlemcen" },
    { value: "El Djamila", name: "El Djamila", label: "Tlemcen" },
    { value: "Tamentefoust", name: "Tamentefoust", label: "Tlemcen" },
    { value: "Annaba", name: "Annaba", label: "Tlemcen" },
    { value: "Chetaibi", name: "Chetaibi", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béni K'sila", name: "Béni K'sila", label: "Tlemcen" },
    { value: "Dellys", name: "Dellys", label: "Tlemcen" },
    { value: "Djinet", name: "Djinet", label: "Tlemcen" },
    { value: "Zemmouri", name: "Zemmouri", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
    { value: "Béjaia", name: "Béjaia", label: "Tlemcen" },
  ];
  const poission = [
    { value: "Sardine", name: "Sardine", label: "Sardine" },
    { value: "Poulpe", name: "Poulpe", label: "Poulpe" },
    {
      value: "cumcumbre de mer",
      name: "cumcumbre de mer",
      label: "cumcumbre de mer",
    },
  ];
  const initialState = {
    date: "yyyy-MM-dd",
    wilaya: "",
    port: "",
    nom: "",
    poids: "",
    taille: "",
  };

  const [form, setForm] = useState("");
  const [datas, setdata] = useState("");

  const postData = async () => {
    const { datas } = await axios.post(
      "http://localhost:5000/prix/",
      initialState
    );
    setdata(datas);
    console.log(datas);
  };

  const handel = (e) => {
    const intermediateState = { ...form };
    console.log(form);
    intermediateState[e.target.name] = e.target.value;
    setForm({ ...intermediateState });
    console.log(intermediateState);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: " row",
          alignItems: " center",
          marginTop: "10%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            width: " 15%",
            border: "1px solid black",
            padding: "8px",
            color: "black",
          }}
          className="datefish"
        >
          <h4 style={{ display: "flex", justifyContent: "center" }}>date</h4>
          <Input
            type="date"
            id="start"
            name="date"
            onChange={(e) => {
              handel(e);
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: " 15%",
            border: "1px solid black",
            padding: "6px",
            color: "black",
          }}
          className="wilaya"
        >
          <h4 style={{ display: "flex", justifyContent: "center" }}>wilaya</h4>
          <Select name="wilaya" options={wilaya}></Select>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: " 15%",
            border: "1px solid black",
            padding: "6px",
            color: "black",
          }}
          className="port"
        >
          {" "}
          <h4 style={{ display: "flex", justifyContent: "center" }}>port</h4>
          <Select name="port" options={port}></Select>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: " 15%",
            border: "1px solid black",
            padding: "6px",
            color: "black",
          }}
          className="poisson"
        >
          {" "}
          <h4 style={{ display: "flex", justifyContent: "center" }}>poisson</h4>
          <Select name="poisson" options={poission}></Select>
        </div>
        <div
          style={{
            backgroundColor: "blue",

            width: " 15%",
            border: "1px solid black",
            padding: "9px",
            color: "black",
          }}
          className="Taille"
        >
          {" "}
          <h4 style={{ display: "flex", justifyContent: "center" }}>Taille</h4>
          <Input
            name="taille"
            onChange={(e) => {
              handel(e);
            }}
          ></Input>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: " 15%",
            border: "1px solid black",
            padding: "9px",
            color: "black",
          }}
          className="Poids"
        >
          {" "}
          <h4 style={{ display: "flex", justifyContent: "center" }}>Poids</h4>
          <Input
            name="poids"
            onChange={(e) => {
              handel(e);
            }}
          ></Input>
        </div>
      </form>
      <div className="btn-fish">
        <Button
          style={{
            backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%",
            borderRadius: "20%",
            paddingTop: "0%",
            paddingBottom: "0%",
            paddingRight: "3%",
            paddingLeft: "3%",
          }}
          onClick={() => {
            setForm(form);
            console.log(form);
          }}
          type="primary"
        >
          submit
        </Button>
      </div>
    </div>
  );
};
export default Fish;
