import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";

import { Icono,IconoTema } from "./Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
    Salud: <IconoTema src={salud} alt="salud" />,
    Otros: <IconoTema src={otros} alt="otros" />,
    Transporte: <IconoTema src={transporte} alt="transporte" />,
    Utilidades: <IconoTema src={utilidades} alt="utilidades" />,
    default: <IconoTema src={otros} alt="otros" />,
  };
  return Images[type] || Images["default"];
};
 