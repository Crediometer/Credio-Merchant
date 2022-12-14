import {BsArrowLeft, BsBank2} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {FiCreditCard} from 'react-icons/fi'
import credio from "../../assets/image/credio.png";
import './Deposit.css'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
const Deposit = () => (
    <div className="deposit">
        <Navbar/>
        <div className="app-container">
            <Sidebar/> 
            <div className="body">
                <div className="deposit-title">
                    <div className="back">
                        <Link to='/dashboard'>
                            <BsArrowLeft />
                        </Link>
                    </div>
                    <p className="deposit-text">Deposit</p>
                </div>
                <div className="deposit-action">
                    <p className="action-text">Actions</p>
                    <div className="deposit-actions">
                        <Link to='/bycredio'>
                            <div className="crediometer">
                                <div className="credio-logo">
                                    <img src={credio}></img>
                                </div>
                                <div className="credio-text">
                                    <p className="action-name">Crediometer</p>
                                    <p className="action-details">Deposit directly to crediometer</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/bycard'>
                            <div className="crediometer">
                                <div className="credio-logo">
                                    <FiCreditCard/>
                                </div>
                                <div className="credio-text">
                                    <p className="action-name">By Card Number</p>
                                    <p className="action-details">Deposit to card</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/bybank'>
                            <div className="crediometer">
                                <div className="credio-logo">
                                    <BsBank2/>
                                </div>
                                <div className="credio-text credio-text-2">
                                    <p className="action-name">Other banks</p>
                                    <p className="action-details">Deposit to a selected bank account</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
         </div>
        </div>
    </div>
)
 
export default Deposit;