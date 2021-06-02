import { useState } from "react";
import axios from "axios";
import "./fish.css";
import { Input, Button } from "antd";
import Select from "react-select";
const Fish = () => {
  const wilaya = [
    { value: "Ain Temouchent", label: "Ain Temouchent" },
    { value: "Alger", label: "Alger" },
    { value: "Tipaza", label: "Tipaza" },
    { value: "jijel", label: "jijel" },
    { value: "Annaba", label: "Annaba" },
    { value: "Bejaia", label: "Bejaia" },
    { value: "Boumerdes", label: "Boumerdes" },
    { value: "Chlef", label: "Chlef" },
    { value: "El Tarf", label: "El Tarf" },
    { value: "Mostaganem", label: "Mostaganem" },
    { value: "Oran", label: "Oran" },
    { value: "Skikda", label: "Skikda" },
    { value: "Tizi ouzou", label: "Tizi ouzou" },
    { value: "Tlemcen", label: "Tlemcen" },
  ];
  const port = [
    { value: "Beni-saf", label: "Beni-saf" },
    { value: "Bouzedjar", label: "Bouzedjar" },
    { value: "Alger", label: "Alger" },
    { value: "El Djamila", label: "El Djamila" },
    { value: "Tamentefoust", label: "Tamentefoust" },
    { value: "Annaba", label: "Annaba" },
    { value: "Chetaibi", label: "Chetaibi" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béni K'sila", label: "Béni K'sila" },
    { value: "Dellys", label: "Dellys" },
    { value: "Djinet", label: "Djinet" },
    { value: "Zemmouri", label: "Zemmouri" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
    { value: "Béjaia", label: "Béjaia" },
  ];
  const poission = [
    { value: "Sardine", label: "Sardine" },
    { value: "Poulpe", label: "Poulpe" },
    { value: "cumcumbre de mer", label: "cumcumbre de mer" },
  ];
  const initialState = [
    {
      date: "yyyy-MM-dd",
      wilaya: "",
      port: "",
      nom: "",
      poids: "",
      taille: "",
    },
  ];

  const [form, setForm] = useState();
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
    <div className="body_fi">
      <div className="conatiner">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-0pky">Date</th>
                <th className="tg-0pky">Wilaya</th>
                <th className="tg-0pky">Port </th>
                <th className="tg-0pky">Nom commun de l’espèce</th>
                <th className="tg-0pky">Poids en gramme</th>
                <th className="tg-0pky">Taille en cm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0pky">
                  <Input
                    type="date"
                    id="start"
                    name="date"
                    onChange={(e) => {
                      handel(e);
                    }}
                  />
                </td>
                <td className="tg-0pky">
                  <div className="tg-0pky">
                    <Select options={wilaya}></Select>
                  </div>
                </td>

                <td className="tg-0pky">
                  <Select options={port}></Select>
                </td>

                <td>
                  <div className="tg-0pky">
                    <Select options={poission}></Select>
                  </div>
                </td>

                <td className="tg-0pky">
                  <Input
                    name="taille"
                    onChange={(e) => {
                      handel(e);
                    }}
                  ></Input>
                </td>
                <td className="tg-0pky">
                  <Input
                    name="poids"
                    onChange={(e) => {
                      handel(e);
                    }}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="btn-fish">
        <Button
          style={{
            backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%",
            borderRadius: "20%",
            paddingTop: "2%",
            paddingBottom: "4%",
            paddingRight: "3%",
            paddingLeft: "3%",
          }}
          onClick={() => {
            setForm(form);
            console.log(form);
          }}
          type="primary"
        >
          {" "}
          submit{" "}
        </Button>
      </div>
    </div>
  );
};

///		Zemmouri El Marsa Ténes El kala Boudis Ziama Mansouria Mostaganem Sidi Lakhdar Arzew Oran
//		Collo La Marsa Stora Bouharoun Cherchell Gouraya Khemisti Tipaza Azeffoun Tigzirt Ghazaouet
//		Honaine Marsa Ben M'hidi
export default Fish;
