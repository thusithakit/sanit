interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone:string;
    message: string;
}

const EmailTemplate = ({firstName,lastName,email,phone,message}:EmailTemplateProps) => {
  return (
    <div>
      <h1>{firstName} {lastName} sent you a new message!</h1>
      <h3>Email:{email}</h3>
      <h3>Phone:{phone}</h3>
      <hr/>
      <p>Message</p>
      <p>{message}</p>
    </div>
  )
}

export default EmailTemplate
