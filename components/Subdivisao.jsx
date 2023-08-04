import estilo from "./Subdivisao.module.css";

export default function Subdivisao(props){
    return (
        <div 
            style={{backgroundColor: props.preto ? "#000" : "#fff"}}        
            className={estilo.subdivisao}>
        </div>
    )
}