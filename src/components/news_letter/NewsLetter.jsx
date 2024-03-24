import './NewLetter.scss'

const NewsLetter = () => {
    return(
        <div className="newsletter">
            <h1>Get Exclusive offers via Emails</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Please enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;