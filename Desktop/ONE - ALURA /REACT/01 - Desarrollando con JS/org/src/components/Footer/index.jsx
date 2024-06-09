import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/armandosombrerero/'>
                <img src="/img/linkedin.png" alt='linkedIn' />
            </a>
            <a href='https://x.com/chepehat'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/chepehat/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img className="logo" src='/img/Logo.png' alt='org' />
        <strong>Dev x Sombrerero</strong>
    </footer>
}

export default Footer