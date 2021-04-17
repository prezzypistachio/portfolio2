import React from 'react'
import Button from '../Button/Button';
import pic from './pic.jpg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="left">
                        <img src={pic} alt="It\'s ya boy" />
                    </div>
                    <div className="right">
                        <div>
                            <p className="big">Keffiyeh 8-bit selfies lo-fi</p>
                            <p className="medium">Single origin coffee heirloom fam tote bag</p>
                            <Button name="Github" />
                            <Button name="Projects" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;