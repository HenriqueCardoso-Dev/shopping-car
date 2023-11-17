export default function Transmission(props : {classname ?: string}) {
  return (
    <svg className={props.classname} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF"/>
      <rect x="4" y="4" width="16" height="16" rx="8" fill="white"/>
      <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF"/>
      <rect x="8" y="8" width="8" height="8" rx="4" fill="white"/>
      <rect x="11" y="17" width="2" height="4" fill="#90A3BF"/>
      <rect x="17" y="11" width="4" height="2" fill="#90A3BF"/>
      <rect x="3" y="11" width="4" height="2" fill="#90A3BF"/>
    </svg>
  )
}
