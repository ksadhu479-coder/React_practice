import React, { Component } from 'react';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={
            fName : '',
            lName:'',
            mobile:'',
            contacts:[],
            selectedId : null
        }
    }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = () => {
    const { fName, lName, mobile, contacts } = this.state;


    const newEntry = { id: Date.now(), fName, lName, mobile };
    this.setState({ contacts: [...contacts, newEntry], fName: '', lName: '', mobile: '' });
  };

   handleView = (id) => {
    this.setState({ selectedId: this.state.selectedId === id ? null : id });
  };


  handleDelete = (id) => {
    const filtered = this.state.contacts.filter(c => c.id !== id);
    this.setState({ contacts: filtered });
  };

  render() {

    const { fName, lName, mobile, contacts, selectedId } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>

        
        <input name="fName"  value={fName} onChange={this.handleChange} />
        <input name="lName"  value={lName} onChange={this.handleChange} />
        <input name="mobile"  value={mobile} onChange={this.handleChange} /><br/>
        <button onClick={this.handleAdd}>Add</button>

        <ul style={{ marginTop: '20px' }}>
          {contacts.map((c) => (
            <li key={c.id}>
              <div><b>{c.fName}</b></div>
              
              <button onClick={() => this.handleView(c.id)}>View</button>
              <button onClick={() => this.handleDelete(c.id)} style={{ marginLeft: '10px' }}>Delete</button>

             
              {selectedId === c.id && (
                <div>
                  <p>{c.lName} - {c.mobile}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default ContactList;