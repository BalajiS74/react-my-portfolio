import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage
  useEffect(() => {
    const storedContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    setContacts(storedContacts);
  }, []);

  // Delete Contact
  const deleteContact = (index) => {
    const updatedContacts = contacts.filter(
      (_, i) => i !== index
    );

    setContacts(updatedContacts);

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );
  };

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4 text-center">
        Admin Panel
      </h2>

      {contacts.length === 0 ? (
        <div className="alert alert-warning">
          No Messages Found
        </div>
      ) : (
        contacts.map((contact, index) => (
          <div
            key={index}
            className="card shadow-sm mb-4"
          >
            <div className="card-body">

              <h5 className="card-title">
                {contact.name}
              </h5>

              <p className="card-text">
                <strong>Email:</strong> {contact.email}
              </p>

              <p className="card-text">
                <strong>Message:</strong>
                <br />
                {contact.message}
              </p>

              <button
                className="btn btn-danger"
                onClick={() => deleteContact(index)}
              >
                Delete
              </button>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPanel;