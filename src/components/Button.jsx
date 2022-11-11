import './styles/button.css';

const Button = ({click, name, type, bgColor, url, textColor}) => {

  const btnStyle = {
    color: textColor,
    background: bgColor
  }
  return (
    <button href={url} style={btnStyle} type={type} onClick={() => click(prev => true)}>
        {name}
    </button>
  )
}

export default Button