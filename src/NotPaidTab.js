import React from 'react'
import NotPaidItem from './NotPaidItem'
import Navbar from './Navbar'
import './css/AccountInfo.css'
import {useState} from 'react'
import NotPaidBtn from './NotPaidBtn'

const NotPaidTab = () => {
    const [sum, setSum] = useState(0)

    
    return (
        <div className="container py-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 ">
                    <div className="card p-5">
                       <Navbar/> 
                       <table className="table table-borderless">
                            <NotPaidItem setSum = {setSum}/>
                        </table>
                        <NotPaidBtn sum = {sum}/>           
                    </div>
                </div>
            </div>
        </div>  

    )
}

export default NotPaidTab
