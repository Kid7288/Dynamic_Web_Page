function statuson() {
    document.getElementById("ImageStatus").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png");
    document.getElementById("ImageCat").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png");
    document.getElementById("SwitchStatus").textContent = ("Switched On");
    document.getElementById("btnon").style.backgroundColor = "#22c55e";
    document.getElementById("btnoff").style.backgroundColor = "#cbd2d9";
}

function statusoff() {
    document.getElementById("ImageStatus").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png");
    document.getElementById("ImageCat").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png");
    document.getElementById("SwitchStatus").textContent = ("Switched Off");
    document.getElementById("btnon").style.backgroundColor = "#cbd2d9";
    document.getElementById("btnoff").style.backgroundColor = "#e12d39";
}