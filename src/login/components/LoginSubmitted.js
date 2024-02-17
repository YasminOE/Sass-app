export default function LoginSubmitted({ submitted }) {
  return(
    <div className="content-grid home-hero">
      <h1>Link sent!</h1>
      <p>Please check the email sent to ({submitted}) to complete logging in with a Magic Login Link.</p>
    </div>
  )
}
``