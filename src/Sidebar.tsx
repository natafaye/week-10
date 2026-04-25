type Contact = {
    id: number
    username: string
    fullName: string
    role: string
}

type Props = {
    contacts: Contact[]
    onContactSelect: (id: number) => void
    selectedContactId: number
}

// <Sidebar contacts={contactList} onContactSelect={setSelectedContactId} selectedContactId={selectedContactId}/>

export default function Sidebar({ contacts, onContactSelect, selectedContactId }: Props) {
    return (
        <div className="w-100">
            <h2 className="text-3xl font-medium">Contacts</h2>
            {contacts.map((contact) => (
                <button
                    key={contact.id}
                    onClick={() => onContactSelect(contact.id)}
                    className={
                        "w-full flex max-w-sm items-center gap-x-4 rounded-xl p-4 outline shadow-none -outline-offset-1 outline-white/10 " +
                        // If this contact we're mapping is the selected one, make the background color a little lighter
                        (contact.id === selectedContactId ? "bg-slate-700" : "bg-slate-800")
                    }
                >
                    <h2 className="text-xl font-medium text-white">{contact.fullName}</h2>
                    <p className="text-gray-400">{contact.username}</p>
                </button>
            ))}
        </div>
    )
}