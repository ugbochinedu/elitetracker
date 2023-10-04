// import classes from "../button/button.module.css"

const Button = (props)=>{
    return <button onClick={props.onClick} className={`${props.className}`}>{props.children}</button>;
};

export default Button;