(function () {
    var btn = document.getElementById('button');
    var skills = document.getElementById('skills');
    btn.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
})();
