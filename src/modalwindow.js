import React from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import CreditCardInformation from './CreditCards';
export function BuyModalWindow(props) {
        return (
            <Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
                <div role="document">
                    <ModalHeader toggle={props.toggle} className="bg-success text-white">Buy Item</ModalHeader>
                    <ModalBody>
                        <CreditCardInformation show={true} operation="Charge" toggle={props.toggle} />
                    </ModalBody>
                </div>
            </Modal>
        );
    
}



export class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            errormessage : ''
        };
    }
    render() {
        //에러 메시지
        let message = null;
        // state에 에러 메시지가 있다면 출력
        if (this.state.errormessage.length !== 0) {
            message = <h5 className="mb-4 textdger">{this.state.errormessage}</h5>
        }
        return (
            <div>
                {message}
                <form onSubmit={this.handleSubmit}>
                    <h5 className="mb-4">Baic Info</h5>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input name="email" type="email" className="form-control" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input name="password" type="password" className="form-control" id="pass" onChange={this.handleChange}/>
                    </div>
                    <div className="form-row text-center">
                        <div className="col-12 mt-2">
                            <button type="submit" className="btn btn-success btn-large">Sign In</button>
                        </div>
                        <div className="col-12 mt-2">
                            <button type="button" className="btn btn-link text-info" onClick={()=> this.props.handleNewUser()}> New User? Register</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }
}
