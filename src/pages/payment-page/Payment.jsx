import Navbar from "../../components/Navbar/Navbar";
import styles from "./Payment.module.css"
import backImg from "../../assets/Back Ground.svg"
import PaymentBox from "../../components/Payment/Payment-box";
import bookImg from "../../assets/Group 20.svg"

function Payment() {
    return (
        <>
            <Navbar />
            <div className={styles.mainContainer}>

                <div className={styles.containerFront}>

                    <div className={styles.courseFeatures}>

                        <h1>Access curated courses worth ₹ 18,500 at just  <span>₹ 99</span>  per year!</h1>

                        <div className={styles.features}>

                            <div className={styles.featuresList}>
                                <img src={bookImg} alt="" />
                                <p> <span> 100+ </span>Job relevant courses </p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src="" alt="" />
                                <p> <span>20,000+</span>  Hours of content</p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src="" alt="" />
                                <p> <span>Exclusive</span>  webinar access</p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src="" alt="" />
                                <p>Scholarship worth <span> ₹94,500</span> </p>
                            </div>
                            
                            <div className={styles.featuresList}>
                                <img src="" alt="" />
                                <p> <span>Ad Free</span>  learning experience</p>
                            </div>

                        </div>
                    </div>

                    <PaymentBox />
                </div>

                {/* <div className={styles.containerBack}>
                     <img src={backImg} alt="" /> 
                </div> */}

            </div>

        </>
    )
}
export default Payment;