import Subdivisao from "./Subdivisao";
import style from "./Linha.module.css";

export default function Linha(props){
	return (
		<div className={style.linha}>
			<Subdivisao preta={props.preta}/>
			<Subdivisao preta={!props.preta}/>
			<Subdivisao preta={props.preta}/>
			<Subdivisao preta={!props.preta}/>
			<Subdivisao preta={props.preta}/>
			<Subdivisao preta={!props.preta}/>
			<Subdivisao preta={props.preta}/>
			<Subdivisao preta={!props.preta}/>
		</div>
	)
}