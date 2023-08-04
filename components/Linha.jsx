import Subdivisao from "./Subdivisao";
import estilo from "./Linha.module.css";

export default function Linha(props){
    return (
        <div className={estilo.linha}>
            <Subdivisao/>
            <Subdivisao preto/>
            <Subdivisao/>
            <Subdivisao preto/>
            <Subdivisao/>
            <Subdivisao preto/>
            <Subdivisao/>
            <Subdivisao preto/>
        </div>
    )
}