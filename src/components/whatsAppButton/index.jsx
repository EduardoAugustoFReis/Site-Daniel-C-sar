import {Container} from "./styles";
import { BsWhatsapp } from "react-icons/bs";

export function ButtonWhatsApp({title,...rest}){
  return(
    <Container {...rest}>
      <a href="https://wa.me/5561995518888" target="_blank">
        <BsWhatsapp/>
        {title}
      </a>
      
    </Container>
  )
}