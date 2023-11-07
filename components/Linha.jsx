import Subdivisao from "./Subdivisao";
import style from "./Linha.module.css";

export default function Linha(){
	return (
		<div className={style.linha}>
			<Subdivisao/>
			<Subdivisao preta/>
			<Subdivisao/>
			<Subdivisao preta/>
			<Subdivisao/>
			<Subdivisao preta/>
			<Subdivisao/>
			<Subdivisao preta/>
		</div>
	)
}