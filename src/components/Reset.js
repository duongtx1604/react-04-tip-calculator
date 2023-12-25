export default function Reset({
    onChangeBill,
    onChangeTip,
    onChangeFriendTip,
    avgTip,
    total,
}) {
    function Reset() {
        onChangeBill(0);
        onChangeTip(0);
        onChangeFriendTip(0);
        avgTip = 0;
        total = 0;
    }

    return <button onClick={Reset}>Reset</button>;
}
