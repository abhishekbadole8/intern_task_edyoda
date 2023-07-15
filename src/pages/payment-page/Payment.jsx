import Navbar from "../../components/Navbar/Navbar";
import styles from "./Payment.module.css"
import PaymentBox from "../../components/Payment/Payment-box";
import bookImg from "../../assets/Group 20.svg"
import tv from "../../assets/tv.svg"
import ads from "../../assets/ads.svg"
import clock from "../../assets/clock.svg"
import cap from "../../assets/cap.svg"

function Payment() {
    return (
        <>
            <Navbar />
            <div className={styles.mainContainer}>

                <div className={styles.containerBack}>

                    <div className={styles.courseFeatures}>

                        <h1 className={styles.mainHeading}>Access curated courses worth <br /> <s>₹ 18,500</s>  at just  <span>₹ 99</span>  per year!</h1>

                        <div className={styles.features}>

                            <div className={styles.featuresList}>
                                <img src={bookImg} alt="" />
                                <p> <span> 100+ </span>Job relevant courses </p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src={clock} alt="" />
                                <p> <span>20,000+</span>  Hours of content</p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src={tv} alt="" />
                                <p> <span>Exclusive</span>  webinar access</p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src={cap} alt="" />
                                <p>Scholarship worth <span> ₹94,500</span> </p>
                            </div>

                            <div className={styles.featuresList}>
                                <img src={ads} alt="" />
                                <p> <span>Ad Free</span>  learning experience</p>
                            </div>

                        </div>
                    </div>

                    <PaymentBox />
                </div>

            </div>

        </>
    )
}
export default Payment;