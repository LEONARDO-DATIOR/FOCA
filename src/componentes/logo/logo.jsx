import LogoImagem from '../../assets/img/Logo.svg'
import './logo.estilo.css'

export default function Logo() {
    return (
        <section className='section-logo'>
            <img src={LogoImagem} alt="Logo FOCA" />
        </section>
    );
}