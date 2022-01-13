import "./Image.css"
function Image(props){
    return(
        <div className="divImg">
            <img src={props.image} alt=""/>
        </div>
    )
}
export default Image