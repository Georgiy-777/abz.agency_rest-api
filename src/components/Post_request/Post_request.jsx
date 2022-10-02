import React from 'react';

const Post_request = () => {
    return (
        <section className='postapi'>
            <div className="container">
                <div className="postapi__content">
                    <h2 className="postapi__title">Working with POST request</h2>
                    <input type='name'/>
                    <input type='email'/>
                    <input type='tel'/>
                    {/*<div>*/}
                    <input type="radio" id="positionChoice1"
                           name="position" value="front">
                        <label htmlFor="positionChoice1">Frontend developer</label>

                        <input type="radio" id="positionChoice2"
                               name="position" value="back">
                            <label htmlFor="positionChoice2">Backend developer</label>

                            <input type="radio" id="positionChoice3"
                                   name="position" value="designer">
                                <label htmlFor="positionChoice3">Designer</label>

                                <input type="radio" id="positionChoice4"
                                       name="position" value="qa">
                                    <label htmlFor="positionChoice4">QA</label>
                                    {/*</div>*/}

                                    {/*<input type="file" id="profile_pic" name="profile_pic" accept=".jpg, .jpeg, .png"/>*/}
                </div>
            </div>
        

        </section>
    );
};

export default Post_request;
