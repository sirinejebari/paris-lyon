import "./Footer.scss";

export const Footer: React.FC = () => {
    return(
        <div className="Footer">
            <footer className="Footer-text page-footer">
                <div className="Footer-copyright footer-copyright">
                    <div className="container">
                        © 2022 Sirine Jabari
                        <a className="grey-text text-lighten-4 right"
                           target="_blank"
                           rel="noreferrer"
                           href="https://www.linkedin.com/in/sirine-jabari/">Linkedin Profile</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}