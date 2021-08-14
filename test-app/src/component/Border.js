import './Border.css';
function Border(props){
    let classes = "border-design" + props.Border;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Border;

