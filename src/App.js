import "./index.css";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Total from "./components/Total";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
    const [bill, isChangeBill] = useState(0);
    const [myTip, isMyTip] = useState(0);
    const [friendTip, isFriendTip] = useState(0);

    let avgTip = (Number(myTip) + Number(friendTip)) / 2;
    let total = Number(bill) + Number(avgTip);

    return (
        <div className="App">
            <Bill bill={bill} onChangeBill={isChangeBill}></Bill>
            <Service tip={myTip} onChangeTip={isMyTip}>
                <label>How did you like the service?</label>
            </Service>
            <Service tip={friendTip} onChangeTip={isFriendTip}>
                <label>How did your friend like the service?</label>
            </Service>
            {bill !== 0 && (
                <Total bill={bill} total={total} tip={avgTip}></Total>
            )}
            <Reset
                onChangeBill={isChangeBill}
                onChangeTip={isMyTip}
                onChangeFriendTip={isFriendTip}
                avgTip={avgTip}
                total={total}
            ></Reset>
        </div>
    );
}

export default App;
