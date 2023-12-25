export default function Service({ tip, onChangeTip, children }) {
    return (
        <div>
            {children}
            <select value={tip} onChange={(e) => onChangeTip(e.target.value)}>
                <option value={0}>No good (0%)</option>
                <option value={15}>OK (15%)</option>
                <option value={20}>OKKKKK (20%)</option>
            </select>
        </div>
    );
}
