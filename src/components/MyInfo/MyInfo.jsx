import './MyInfo.css'
import profileIMG from '../../assets/profile.jpg'
import { useState } from 'react'

function MyInfo(){
    const[show,setShow] = useState(false)

    function handleClick(){
        setShow((value)=> !value)
    }

    const curtain = show ==true ? 'curtain':'none';
    const tagName = show ==true ? 'my-info sm':'my-info sm hide';

    return (
        <>
            
            <div className={curtain} onClick={show==true?handleClick:''}></div>
            <button onClick={handleClick} className='my-info-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </button>
            <section className={tagName} >
                <header>
                    <p>Created by</p>
                    <div className='profile'>
                        <div className='profile-name-and-profession'>
                            <p className='profile-name'>AleXRD</p>
                            <p className='profile-profession'>FRONTEND</p>
                        </div>
                        <img src={profileIMG} alt="" srcset="" />
                    </div>
                </header>
                <section className='sities'>
                    <a className='site' target="_blank"  href='https://github.com/AleSGXRD'>
                        <div className='site-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#IconifyId18d0a0f21deba06161)"><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd"/></g><defs><clipPath id="IconifyId18d0a0f21deba06161"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                            <div className='site-name'>Github</div>
                        </div>
                    </a>
                    <a className='site' target="_blank"  href='https://www.linkedin.com/in/alexrd-s%C3%A1nchez-4ab950284/'>
                        <div className='site-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                            <div className='site-name'>LinkedIn</div>
                        </div>
                    </a>
                    <a className='site' target="_blank"  href='https://alexrdportafolio.netlify.app/#'>
                        <div className='site-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 432 432"><path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 64Q187 67 168 85.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 303q39.5 0 73-18.5T341 301q0-20-23.5-35.5t-52-23t-52-7.5t-52 7.5t-52 23T85 301q21 32 55 50.5t73.5 18.5"/></svg>
                            <div className='site-name'>Portfolio</div>
                        </div>
                    </a>
                </section>
                
            </section>
            
        </>
    )
}

export default MyInfo;