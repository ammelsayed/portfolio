class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
            <footer>
                <div class="inner-footer">
                    <p>
                        &copy 2025 <a href="https://ammelsayed.github.io/"><b>A.M.M. Elsayed</b></a>. All rights reserved.
                        <br>
                        Powered by <a href="https://jekyllrb.com/"><b>Jekyll</b></a>.
                    </p>
                    <div class="social-links"></div>
                </div>
            </footer>
    `
    }
}
customElements.define('my-footer',MyFooter)
