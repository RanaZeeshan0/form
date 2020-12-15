import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './form.css'

export default function form() {
    return (
        <div className="parant-box">


            <Container className="main-box">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="4" xl="4">

<div className="contant-box">

                        <p className="left-side-heading">company detail:</p>
                        <div className="input-box-1">
                            <label for="fCustomerName" className="form-label-margin-right">Company Name:</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="ZAAZ international" />
                        </div>

                        <div className="company-adres-box">
                            <label for="fCustomerName" className="adres-label-margin-right">Adrees:</label>
                            <div>
                                <textarea className="custom-textarea"  name="" id="" cols="23" rows="3"></textarea>
                            </div>
                            
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="br-no-label-margin-right">BR No.</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="BR #:" />
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="vat-no-label-margin-right">VAT No.</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="VAT #:" />
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="email-label-margin-right">Email:</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="E-Mail:" />
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="contact-no-label-margin-right">Contact No.</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="Contact #:" />
                        </div>


                        </div>

                    </Col>

                    <Col xs="12" sm="12" md="12" lg="8" xl="8">
                    <div className="contant-box2">
                        <p className="right-side-heading">company Bank detail:</p>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="account-tittle-label-margin-right">Account Title:</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="ZAAZ International:" />
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="acc-no-label-margin-right">Acc No.:</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="Acc. #:" />
                        </div>

                        <div className="input-box-1">
                            <label for="fCustomerName" className="bank-label-margin-right">Bank:</label>
                            <input type="text" required className="address-input3" id="fCustomerName" name="fCustomerName" placeholder="HNB" />
                        </div>

                        <div className="company-adres-box">
                            <label for="fCustomerName" className="branch-adres-label-margin-right">Branch Adrees:</label>
                            <div>
                                <textarea className="custom-textarea" name="" id="" cols="23" rows="3"></textarea>
                            </div>
                          
                        </div>  
                        <div className="button-box">
                            <button className="btton-custom-style">Add Button</button>
                        </div>


                        </div>

                    </Col>

                    <div className="table-box">
                            <table className="table-border">
                                <tr>
                                    <th className="table-heading-bg-colour">
                                    Sr.No.
                                    </th>

                                    <th className="table-heading-bg-colour">
                                    Acc Title
                                    </th>

                                    <th className="table-heading-bg-colour">
                                     Acc No   
                                    </th>

                                    <th className="table-heading-bg-colour">
                                    Bank 
                                    </th>

                                    <th className="table-heading-bg-colour">
                                    Address 
                                    </th>
                                </tr>


                                <tr>
                                    <td>1</td>
                                    <td>ZAAZ International</td>
                                    <td>0017000102465</td>
                                    <td>HABIB Bank LTD</td>
                                    <td>140/142 SECCOND CROSS STREET COLOMBO</td>
                                </tr>
                            </table>
                        </div>

                        <div className="button-box">
                            <button className="btton-custom-style">Edit</button>
                            <button className="btton-custom-style">Save</button>
                        </div>
                </Row>
            </Container>
        </div>
    )
}
