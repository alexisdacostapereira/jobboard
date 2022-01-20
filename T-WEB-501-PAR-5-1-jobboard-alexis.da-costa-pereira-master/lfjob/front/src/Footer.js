import React from 'react';



class Footer extends React.Component {
    render() {

        
        return (
            <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col footer_style">
                                <ul className="list-unstyled">
                                    <h4>Footer</h4>
                                    <li>Réalisé par Michel et Alexis</li>
                                    <li>06 06 06 06 06</li>
                                    <li>IT Student in Epitech</li>
                                    
                                </ul>
                            </div>
                            <div className="col footer_style">
                                
                                    <h4>LFJob</h4>
                                    <p>LFJob est un site developpé avec React,bootstrap, NodeJS et Express</p>
                                
                            </div>
                            <div className="col footer_style">
                                <ul className="list-unstyled">
                                    <h4>Nous contacter</h4>
                                    <li>06 06 06 06 06</li>
                                    <li>LFJob@lfjob.fr</li>
                                    <li>58 rue Lfjob PARIS 75000</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <p className="col-sm endp">
                                &copy;{new Date().getFullYear()} LFJob INC | All right reserved 
                            </p>
                        </div>
                    </div>
            </div>
            
        )
    }
}

export default Footer;