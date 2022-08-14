import './Card.scss';

const Card:React.FC<any> = (props)=> {
  const classes = `card ${props.className}`;
  return <div className={classes}>
    {props.children}
  </div>;
}

export default Card;