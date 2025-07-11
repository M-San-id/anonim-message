import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

   
    const serviceId = "service_hwda72l";
    const templateId = "template_7silzct";
    const publicKey = "C6JlIiElk2rvlkiuO"; 

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus("Fesan berhasil dikirim");
        form.current.reset(); 
      },
      (error) => {
        console.log(error.text);
        setStatus(`Failed to send email: ${error.text}`);
      }
    );
  };

  return (
    <div>
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="message" className="title">
              Tulis pesan disini
            </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="50"
              required
              placeholder="Tulis pesan Anda di sini..."
            />
          </div>
          <button type="submit">Kirim</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
