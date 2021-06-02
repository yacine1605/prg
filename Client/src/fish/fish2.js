import Select from "react-select";

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

const fish2 = () => {
  return (
    <div>
      <Select options={wilaya} />
      <Select options={port} />
      <Select options={poission} />
    </div>
  );
};

export default fish2;
