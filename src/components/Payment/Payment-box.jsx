import styles from "./Payment-box.module.css"
import expiryclock from "../../assets/Icon Clock.svg"
import paymentCompanyLogo from "../../assets/Razorpay Icon.svg"
import { useState } from "react"


function PaymentBox() {

    const [selectedPlan, setSelectedPlan] = useState(null)
    const [total, setTotal] = useState(0)

    
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

                <div className={styles.planOne} >
                    <div className={styles.planLeftSide}>
                        <input type="radio" />
                        <h5>12 Months Subscription</h5>
                    </div>
                    <div className={styles.planRightSide}>
                        <p>Total <span className={styles.subMPrice}> ₹99</span></p>
                        <p>₹8 <span className={styles.permonth}>/mo</span> </p>
                    </div>
                </div>

                <div className={styles.planOne} >
                    <div className={styles.planLeftSide}>
                        <input type="radio" />
                        <h5>12 Months Subscription</h5>
                    </div>
                    <div className={styles.planRightSide}>
                        <p>Total <span className={styles.subMPrice}> ₹179</span></p>
                        <p>₹15 <span className={styles.permonth}>/mo</span> </p>
                    </div>
                </div>

                <div className={styles.planOne}>
                    <div className={styles.planLeftSide}>
                        <input type="radio" />
                        <h5>6 Months Subscription</h5>
                    </div>
                    <div className={styles.planRightSide}>
                        <p>Total <span className={styles.subMPrice}> ₹149</span></p>
                        <p>₹25 <span className={styles.permonth}>/mo</span> </p>
                    </div>
                </div>

                <div className={styles.planOne}>
                    <div className={styles.planLeftSide}>
                        <input type="radio" />
                        <h5>3 Months Subscription</h5>
                    </div>
                    <div className={styles.planRightSide}>
                        <p>Total <span className={styles.subMPrice}> ₹99</span></p>
                        <p>₹33 <span className={styles.permonth}>/mo</span> </p>
                    </div>
                </div>


            </div>

            <div className={styles.calculationBox}>

                <div className={styles.subscriptionFee}>
                    <p>Subscription Fee</p>
                    <h5>₹18,500</h5>
                </div>

                <div className={styles.offerTag}>
                    <div className={styles.offerprice}>
                        <p>Limited time offer</p>
                        <h5>- ₹18,500</h5>
                    </div>

                    <div className={styles.offerValidity}>
                        <img src={expiryclock} alt="clock-icon" />
                        <p>Offer valid till 25th March 2023 </p>
                    </div>
                </div>

                <div className={styles.allTotal}>
                    <p>Total <span> (Incl. of 18% GST)</span></p>
                    <h4>₹149</h4>
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