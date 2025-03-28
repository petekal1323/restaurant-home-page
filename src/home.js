import heroImage from "./assets/traditional3.jpg";

export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    heroDiv.innerHTML = `
    <picture class="hero-image">
        <img src="${heroImage}" alt="Hero Image" />
    </picture>
    <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-content-flex-container">
                <div class="hero-content-flex-left">
                    <h1>Mornings Matter</h1>
                    <p>Mornings are our thing. We’re here to make your breakfast a little brighter each day.</p>
                </div>
                <div class="hero-conent-flex-right">
                </div>
                <a href="#" class="hero-cta">View Menu</a>
            </div>
        </div
    </div>

</div>

  `;

    content.appendChild(heroDiv);
}