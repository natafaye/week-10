import { useState } from "react"
import { TEST_DATA } from "./myData"
import Sidebar from "./Sidebar"
import Button from "./Button"


export default function App() {
  const [contactList, setContactList] = useState(TEST_DATA)
  // DO NOT: store the actual selected contact because that would duplicate it
  // DO: store the id or index of the selected contact so that we have no duplication
  const [selectedContactId, setSelectedContactId] = useState(0)

  const selectedContact = contactList.find(contact => contact.id === selectedContactId)

  const deleteContact = (idToDelete: number | undefined) => {
    setContactList(contactList.filter(item => item.id !== idToDelete))
  }

  return (
    <div className="text-white p-4 flex">
      <Sidebar contacts={contactList} onContactSelect={setSelectedContactId} selectedContactId={selectedContactId} />
      <div className="grow">
        <h1 className="text-4xl font-bold">{selectedContact?.fullName}</h1>
        <hr className="my-3" />
        <p className="mb-4">Role: {selectedContact?.role}</p>
        <Button text="Delete" onClick={() => deleteContact(selectedContact?.id)}/>
      </div>
    </div>
  )
}

// React CRUD Application
// CRUD = Create, Read, Update, Delete appointments
// React (booking appointments)

// Description of how it works

// Bring to class on Friday some broken code (broken description)
// Something you are stuck on and don't understand

// React
// Tailwind (Bootstrap is fine)
// Focus on showing some data in the page (array of objects showing in the page)

// Data Types
// Variables

// string, number, boolean
// object, array, function


// Steps to Start an App
// 1) Make it with npm create vite@latest
// 2) Add Tailwind by following steps 2, 3, 4 in Tailwind documentation
// 3) Make yourself some data (array of objects)
// 4) Show the array data in the App component
// 5) Make a second component and use it
// 6) Style everything with a little bit of Tailwind (don't be afraid to copy from the docs and then tweak)

// 7) Put the array of objects in state
// 8) Pick one more thing to put in state (sidebar open/closed, selected something, count of something)
// 9) Use props to pass things down from parent components to children components

// 10) Add ability to delete items from array
// 11) Add a form for creating a new item in the array
// 12) Add some kind of update (a form if you're feeling brave, or a button if you're not)

// 13) Connect to a backend

// Best Way To Learn
// Write code until you're stuck
// Find an example on the internet and copy a small piece
// Try to figure out how to put that small piece in your app
// Adjust it in some way (customize it)