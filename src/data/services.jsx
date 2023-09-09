import {
  FaWallet,
  FaBuilding,
  FaHome,
  FaIndustry
} from "react-icons/fa";

export const services = [
  {
    title: "Residential ",
    content:
      "Includes both new construction and resale homes. The most common category is single-family homes. There are also condominiums, co-ops, townhouses, duplexes, quad lexesm high-value homes, multi-generatinoal and vacation homes",
    icon: <FaHome />,
  },
  {
    title: "Commercial",
    content:
      "Incudes shopping centers and strip malls, medical and educational buildins, hotels and offices. Apartment buildings are often considered commercial, even though they are used for residences, That's because they are owned to produce income.",
    icon: <FaBuilding />,
  },
  {
    title: "Industrial",
    content:
      "Includes manufacturing buildings and property,  as well as warehouses. The buildings can be used for research, production, storage, ,and distribution of goods. Some buildings that distribute goods are considered",
    icon: <FaIndustry />,
  },
];
