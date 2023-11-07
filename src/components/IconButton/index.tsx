interface props {
  icon: JSX.Element
  actionFunction ?: () => void
}

export default function IconButton({icon, actionFunction} : props) {

  return (
    <div onClick={actionFunction} className="m-3 p-2.5 rounded-full shadow">
      {icon}
    </div>
  )
}