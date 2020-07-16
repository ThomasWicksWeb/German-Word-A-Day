import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="is-size-6">
                    <strong>German Word-A-Day</strong> by <a href="https://thomaswicks.com/" target="_blank" rel="noopener noreferrer" className="hvr-sweep-to-right text-highlight has-text-weight-bold">Thomas Wicks,</a> created to help German learners keep on learning.
                </p>

                <p className="is-size-6">If you notice any mistakes, please contact me on my main page <a href="https://thomaswicks.com/report" target="_blank" rel="noopener noreferrer" className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold">here</a>
                </p>

                <p className="is-size-6">If you would like to support this website, you can <a href="https://www.buymeacoffee.com/thomaswicks" target="_blank" rel="noopener noreferrer" className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold">buy me a coffee</a> ☕ if you'd like.
                </p>

                <p className="is-size-6">Want to contribute to this project? Check out the  <a href="https://www.github.com/thomaswicksweb/German-Word-A-Day" target="_blank" rel="noopener noreferrer" className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold">GitHub repository.</a></p>

                <p className="is-size-6">Last corrections made on <strong>Dec 16th, 2019.</strong></p>
            </div>
        </footer>
    )
}

export default Footer;