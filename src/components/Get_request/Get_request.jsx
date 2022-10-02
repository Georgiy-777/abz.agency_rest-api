import React from 'react';
import User1 from '../assets/icon1.png'
import User2 from '../assets/icon2.png'
import User3 from '../assets/icon3.png'
import User4 from '../assets/icon4.png'
import User5 from '../assets/icon5.png'
import User6 from '../assets/icon6.png'





const Get_request = () => {
    // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(function (response) { return response.json(); }).then(function (data) { console.log(data); }).catch(function (error) { // proccess network errors });
    const users = [
        {id:1,
            name:"Salvador Stewart Flynn Thomas...",
            email:"frontend_develop@gmail.com",
            phone:"+38 (098) 278 44 24",
            position:"Frontend Developer Frontend ...",
            position_id:1,
            registration_timestamp:1664314134,
            // photo: {User1}
        },{id:2,
            name:"Takamaru Ayako Jurrien",
            email:"Takamuru@gmail.com",
            phone:"+38 (098) 278 90 24",
            position:"Lead Independent Director ",
            position_id:2,
            registration_timestamp:1664314156,
            // photo: {User2}
        },{id:3,
            name:"Ilya",
            email:"Ilya_founder@gmail.com",
            phone:"+38 (098) 235 44 24",
            position:"Co-Founder and CEO",
            position_id:16,
            registration_timestamp:1664314178,
            // photo: {User3}
        },{id:4,
            name:"Alexandre",
            email:"Alexandr_develop@gmail.com",
            phone:"+38 (098) 198 44 24",
            position:"Lead Independent Director",
            position_id:41,
            registration_timestamp:1664314126,
            // photo: {User4}
        },{id:5,
            name:"Winny",
            email:"Winny_develop@gmail.com",
            phone:"+38 (098) 278 22 88",
            position:"Former Senior Director",
            position_id:14,
            registration_timestamp:1664314190,
            // photo: {User5}
        },{id:6,
            name:"Simon",
            email:"Simon@gmail.com",
            phone:"+38 (098) 278 44 00",
            position:"President of Commerce",
            position_id:6,
            registration_timestamp:1664314112,
            // photo: {User6}
        }]
    
        
        
        
        
        

        
        
    return (
            <section className='getapi'>
                <div className="container">
                    <div className="getapi__content">
                        <h2 className="getapi__title">
                            Working with GET request
                        </h2>
                        <ul className="getapi__cart-block">
                            {users.map(user =>
                            <li className="getapi__cart" key={user.id}>*
                                {/*<div>{user.photo}</div>*/}
                                <div>{user.name}</div>
                                <div>
                                    <span>{user.position}</span>
                                    <span>{user.email}</span>
                                    <span>{user.phone}</span>

                                </div>
                            </li>
                            )}

                        </ul>
                        <button className='myBtn'>Show more</button>
                    </div>
                </div>
            </section>
        );
    };

    export default Get_request;
