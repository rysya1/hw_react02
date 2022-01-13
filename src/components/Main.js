import Age from "./Age"
import Image from "./Image"
import Names from "./Names"
import "./Main.css"
function Main(props){
    return(
        <div className="MainCl">
            <Image image={props.image}/> 
            <hr></hr>
            <Age age={props.age}/> 
            <hr></hr>
            <Names name={props.name}/>
        </div>
    )
}
export default Main