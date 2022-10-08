import React from "react";
import { connect } from "react-redux";

const Deleteuser = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover" border="1">
            <thead className="table-header  text-Black" >
              <tr >
                
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    
                    <td><b>{contact.name}</b></td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Restore
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deleteuser);
