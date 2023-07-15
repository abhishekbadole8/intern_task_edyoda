import styles from "./Payment-box.module.css"
import expiryclock from "../../assets/Icon Clock.svg"
import tickRadio from "../../assets/tick-radio.svg"
import blankRadio from "../../assets/Radio Button.png"
import disRadio from "../../assets/dis-radio.png"
import paymentCompanyLogo from "../../assets/Razorpay Icon.svg"
import { useState } from "react"


function PaymentBox() {

    const [selectedPlan, setSelectedPlan] = useState(12)
    const [total, setTotal] = useState(179)

    const plansArray = [
        { month: 12, price: 99, permonth: 8, valid: false },
        { month: 12, price: 179, permonth: 15, valid: true },
        { month: 6, price: 149, permonth: 25, valid: true },
        { month: 3, price: 99, permonth: 33, valid: true },
    ]

    const handleSelectedPlan = (plan, price) => {
        setSelectedPlan(plan)
        setTotal(price)
    }

    const calculation = new Intl.NumberFormat().format(18500 - total)

    return (
        <div className={styles.paymentBox}>

            <div className={styles.upperBtns}>

                <div className={styles.topBtn}>
                    <h2>1</h2>
                    <p>Sign Up</p>
                </div>

                <div className={styles.topBtn}>
                    <h2>2</h2>
                    <p>Subscribe</p>
                </div>

            </div>

            <div className={styles.plans}>

                <h5 className={styles.subHeading}>Select Your Subscription plan</h5>

                {plansArray.map((plan, index) => {

                    const { month, price, permonth, valid } = plan // Destructure

                    return (
                        <div className={styles.head}>

                            {month == 12 && valid ?
                                <div className={styles.recTag}>
                                    <p>Recommended</p>
                                </div> : ""}

                            {!valid ?
                                <div className={styles.expTag}>
                                    <p>Offer Expired</p>
                                </div> : ""}


                            <div className={`${styles.planOne} ${selectedPlan == month && valid ? styles.selectedPlan : ""} ${!valid && styles.inActivePlan}`}
                                onClick={() => { valid && handleSelectedPlan(month, price) }} key={index}>

                                <div className={styles.planLeftSide}>

                                    {(!valid && disRadio) ? <img src={disRadio} alt="" /> :
                                        <img src={month == selectedPlan ? tickRadio : blankRadio} alt="" />}

                                    <h5>{month} Months Subscription</h5>
                                </div>

                                <div className={styles.planRightSide}>
                                    <p>Total <span className={styles.subMPrice}> ₹{price}</span></p>
                                    <p>₹{permonth} <span className={styles.permonth}>/mo</span> </p>
                                </div>

                            </div>


                        </div>
                    )
                })}


            </div>

            <div className={styles.calculationBox}>

                <div className={styles.subscriptionFee}>
                    <p>Subscription Fee</p>
                    <h5>₹18,500</h5>
                </div>

                <div className={styles.offerTag}>
                    <div className={styles.offerprice}>
                        <p>Limited time offer</p>
                        <h5>- ₹{calculation}</h5>
                    </div>

                    <div className={styles.offerValidity}>
                        <img src={expiryclock} alt="clock-icon" />
                        <p>Offer valid till 25th March 2023 </p>
                    </div>
                </div>

                <div className={styles.allTotal}>
                    <p>Total <span> (Incl. of 18% GST)</span></p>
                    <h4>₹{total}</h4>
                </div>

            </div>

            <div className={styles.paymentBtns}>
                <button className={styles.cancelPayment}>CANCEL</button>
                <button className={styles.procedPayment}>PROCEED TO PAY</button>
            </div>

            <div className={styles.paymentCompanyLogo}>
                <img src={paymentCompanyLogo} alt="" />
            </div>


        </div>
    )
}
export default PaymentBox;