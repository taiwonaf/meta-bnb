import './styles/button.css';

const Button = ({name, type, bgColor, url, textColor}) => {

  const btnStyle = {
    backgroundColor: `${bgColor}`,
    color: textColor

  }
  return (
    <button href={url} style={btnStyle} type={type}>
        {name}
    </button>
  )
}

export default Button