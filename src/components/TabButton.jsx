export default function TabButtton({ onSelect, children }) {
    return <li><button onClick={onSelect}>{children}</button></li>;
}