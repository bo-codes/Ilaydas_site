import { useState } from "react"

export const EmailForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className="email-form">
      <div></div>
      <div></div>
      <div></div>
      <a
        id="header-contact"
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=ilaydaakin1010@gmail.com&csu=Work+Inquiry&body=${body}`}
        target="_blank"
        rel="noreferrer"
      ></a>
    </div>
  )
}
