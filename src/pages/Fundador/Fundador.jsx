import { useParams, Link } from 'react-router-dom';
import associados from '../../data/associados.json';
import './fundador.css';

export const Fundador = () => {
    const { id } = useParams();
    const fundador = associados.find(a => a.id === Number(id));

    if (!fundador) {
        return (
            <main>
                <section className="fundador-detalhe-section">
                    <div className="fundador-detalhe-shell">
                        <div className="fundador-detail-empty">
                            Associado fundador não encontrado. <Link to="/quem-somos#fundadores">Voltar para os fundadores</Link>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="fundador-detalhe-section">
                <div className="fundador-detalhe-shell">
                    <article className="fundador-detalhe-card">
                        <div className="fundador-detalhe-media">
                            <img src={fundador.foto} alt={fundador.nome} />
                        </div>
                        <div className="fundador-detalhe-content">
                            <span className="fundador-detalhe-kicker">Associado fundador</span>
                            <h1>{fundador.nome}</h1>
                            <p>{fundador.descricao}</p>
                            <div className="fundador-detalhe-actions">
                                <Link className="fundador-back-link" to="/quem-somos#fundadores">
                                    Voltar para os fundadores
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Fundador;
