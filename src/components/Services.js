import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";


const Services = () => {
    return (
        <>

            <div className="serviceSection">

                <h2>Our Services</h2>
                <div className="flexitem seviceBox">

                    <div className="services flexColumn">
                        <TbTruckDelivery className="icon" />
                        <h5>Super Fast and Free Delivery</h5>
                    </div>


                    <div className="services-2">

                        <div className="services-colum-2 flexitem">
                            <MdSecurity className="icon" />
                            <h5>Non-contact Shipping</h5>
                        </div>


                        <div className="services-colum-2 flexitem">
                            <GiReceiveMoney className="icon" />
                            <h5>Money-back Guaranteed</h5>

                        </div>
                    </div>

                    <div className="services flexColumn">

                        <RiSecurePaymentLine className="icon" />
                        <h5>Super Secure Payment System</h5>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
