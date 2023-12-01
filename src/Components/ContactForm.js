import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>send msg to  us</h1>
      <form>
        <input placeholder="name"/>
        <input placeholder="email"/>
        <input placeholder="place"/>
        <textarea placeholder=" destination"rows="4"></textarea>
        <textarea placeholder="feed back "rows="5"></textarea>
        <button>send msg</button>
      </form>
    </div>
  );
}

export default ContactForm;