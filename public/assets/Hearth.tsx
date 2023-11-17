"use client"
import { useState } from "react";

export default function Hearth(props: { isActive: boolean, classname?: string }) {
  const [favorite, setFavorite] = useState<boolean>(props.isActive);

  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill={favorite === true ? "#ED3F3F" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setFavorite(!favorite)}
      className={props.classname || ""}
    >
      <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z" stroke={favorite === true ? "#ED3F3F" : "#90A3BF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}