import React from 'react';

import { Button, Form} from "react-bootstrap";

const Post_request = () => {
    return (
        <section className='postapi'>
            <div className="container">
                <div className="postapi__content">
                    <h2 className="postapi__title">Working with POST request</h2>
                    <Form>
                        
                        <Form.Group  controlId="formBasicName">
                            <Form.Control className="postapi__inputgroup" type="text" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group  controlId="formBasicEmail">
                            <Form.Control className="postapi__inputgroup" type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group  controlId="formBasicPhone">
                            <Form.Control className="postapi__inputgroup"   type="tel" placeholder="Phone" />
                        </Form.Group>


                        {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3">
                                <Form.Check
                                    reverse
                                    label="Frontend developer"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-1`}
                                />
                                <Form.Check
                                    reverse
                                    label="Backend developer"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-2`}
                                />
                                <Form.Check
                                    reverse
                                    label="Designer"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-1`}
                                />
                                <Form.Check
                                    reverse
                                    label="QA"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-2`}
                                />

                            </div>
                        ))}
                        <Form.Group className="mb-3" controlId="formBasicPassword">                            
                            <Form.Control type="file" placeholder="Phone" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
        

        </section>
    )
}
export default Post_request;
