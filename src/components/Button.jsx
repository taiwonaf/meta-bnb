import './styles/button.css';

const Button = ({name, type, bgColor, url, textColor}) => {

  const btnStyle = {
    color: textColor,
    background: bgColor
  }
  return (
    <button href={url} style={btnStyle} type={type}>
        {name}
    </button>
  )
}

export default Button