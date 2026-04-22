import Button from "./Button";

const myData = [
  {
    id: 0,
    username: "nata",
    fullName: "Natalie Childs",
    role: "Instructor"
  },
  {
    id: 1,
    username: "juan",
    fullName: "Juan",
    role: "Student"
  },
  {
    id: 2,
    username: "tyler",
    fullName: "Tyler",
    role: "Student"
  },
]

// const myDataDivs = [
//   <div>nata</div>,
//   <div>juan</div>,
//   <div>tyler</div>
// ]

export default function App() {
  return (
    <div>
      { myData.map((x) => (
        <div key={x.id} className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <h2 className="text-xl font-medium text-black dark:text-white">{x.fullName}</h2>
          <p className="text-gray-500 dark:text-gray-400">{x.username}</p>
        </div>
      )) }
      {/* <div>nata</div>
      <div>juan</div>
      <div>tyler</div> */}
      <Button />
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


// Best Way To Learn
// Write code until you're stuck
// Find an example on the internet and copy a small piece
// Try to figure out how to put that small piece in your app
// Adjust it in some way (customize it)