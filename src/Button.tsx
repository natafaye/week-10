type Props = {
    text: string
    onClick: () => void
}

export default function Button({ text, onClick }: Props) {
    return <button onClick={onClick} className="bg-cyan-500 rounded-full p-3 text-white">{ text }</button>
}