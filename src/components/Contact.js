const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Get in touch with us.</h1>
        <div className="row">
          <input type="text" className="name" placeholder="name" />
          <input type="email" className="email" placeholder="email" />
        </div>

        <input
          type="text"
          className="message"
          placeholder="Type your message"
        />
        <button type="submit" className="submit" value="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
