// Função para abrir e fechar a aba lateral
document.getElementById('category-toggle').addEventListener('mouseover', function() {
    document.querySelector('.menu-content').style.display = 'block';
});

document.querySelector('.side-menu').addEventListener('mouseleave', function() {
    document.querySelector('.menu-content').style.display = 'none';
});
