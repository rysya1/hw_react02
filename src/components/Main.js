
import "./Main.css"
function Main(props){
    return(
        <div className="MainCl">
            <div className="divImg">
                <img src={props.image} alt=""/>
            </div> 
            <hr></hr>
            <div >
                <div className='age'>{props.age}</div>
            </div>
            <hr></hr>
            <div>
                <div className='name'>{props.name}</div>
            </div>
        </div>
    )
}
export default Main