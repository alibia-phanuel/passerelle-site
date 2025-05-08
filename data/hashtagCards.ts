import { MdOutlineWifi } from "react-icons/md";
import { RiCarLine } from "react-icons/ri";
import { MdCleaningServices } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";

export const hashtagCards = [
  {
    color: "bg-[#EF4444]",
    icone: MdOutlineWifi,
    title: "Internet Haut Débit",
    description:
      "Profitez d’une connexion rapide et stable grâce à notre service de fibre\noptique.",
  },
  {
    color: "bg-[#3B82F6]",
    icone: RiCarLine,
    title: "Location & Vente de Véhicules",
    description:
      "Des véhicules fiables pour tous vos\nbesoins de déplacement, à court ou long terme.",
  },
  {
    color: "bg-[#F59E0B]",
    icone: MdCleaningServices,
    title: "Services d’Hygiène",
    description:
      "Des équipes professionnelles pour assurer la propreté de vos espaces.",
  },
  {
    color: "bg-[#14B8A6]",
    icone: FaUsersCog, // correction ici
    title: "Placement de Personnel",
    description:
      "Mise à disposition de personnel qualifié pour tous types de missions.",
  },
];
