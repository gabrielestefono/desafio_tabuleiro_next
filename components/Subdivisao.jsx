import estilo from "./Subdivisao.module.css";

export default function Subdivisao(props){
    return (
        <div className={estilo.subdivisao} style={{backgroundColor: props.preta ? '#000' : '#fff'}}>

        </div>
    )
}