interface props {
  classname?: string,
  content?: string, 
  action?: () => void,
  theme ?: string
}

export default function ButttonDefault(props : props) {
  return (
    <button
      onClick={props?.action}
      className={props.classname || ""}
      style={{backgroundColor: `var(--${props.theme || 'primary'})`, fontWeight: 600, padding: "5px 10px"}}
    >
      {props.content}
    </button>
  )
}