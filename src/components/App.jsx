import React from 'react';
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQEbh_OG7UlQCA/profile-displayphoto-shrink_200_200/0/1571235274101?e=1624492800&v=beta&t=XcndoN_qEfafJof0_TLEG8rcvRAWdCm81BFHhGPfuGE" />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
