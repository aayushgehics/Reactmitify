import React from 'react'
import './Component.css'
import {Button} from '@material-ui/core'
import {Button as Button1} from 'antd'
import {BsBag} from 'react-icons/bs'
import cli from './Home-Hero-Desktop.jpg'
import img1 from './Category-Multivitamin.jpg'
import 'antd/dist/antd.css';
import img2 from './Category-Bundles.jpg'
import img3 from './Category-Pregnancy__1_.jpg'
import img4 from './Category-Protein__1_.jpg'
const Components = () => {
    return (
        <div className="copy">
            <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Mulish&display=swap" rel="stylesheet"></link>
            <header>
                <nav>
                   <Button1 type="text"> <b className="title">R<b style={{textTransform:'lowercase'}}>itual</b></b></Button1>
                    <Button1 type="text" className="menucard">Menu</Button1>
                    <Button1 type="text" className="text" >Who We Are <BsBag className="bag"></BsBag></Button1>
                    
                </nav>
        
            </header>
            <body>
                <div className="op">
                <div className="back">
                    <img src={cli} alt="this"></img>
                </div>
                <div className="over-back" >
                    <div className="pp"> <b>The future</b></div>
                    <div className="pq"><b>of health</b></div>
                    <div className='cu'>
                       <i>— is clear.</i>
                    </div>

                    <Button variant="contained" classnamt="btn" >Shop All</Button>

                </div>
                </div>
                <div className="row"> 
                     <img src={img1}className="col span-1-of-4 img1" alt="multivitamin"></img>
                     <img src={img4}className="col span-1-of-4 img2" alt="multivitamin"></img>
                     <img src={img3}className="col span-1-of-4 img3" alt="multivitamin"></img>
                     <img src={img2}className="col span-1-of-4 img4" alt="multivitamin"></img>
                  <div className="row">
                    </div>
                </div>
            </body>
        </div>
    )
}
export default Components
