export default function Bill({ bill, onChangeBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => onChangeBill(e.target.value)}
            />
        </div>
    );
}
