function mudarCor() {
    var cores = ['#FFD700', '#FF6347', '#98FB98', '#87CEEB', '#FFA07A'];
    var novaCor = cores[Math.floor(Math.random() * cores.length)];

    document.body.style.backgroundColor = novaCor;
}
