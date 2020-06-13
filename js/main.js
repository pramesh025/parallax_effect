window.onload = function() {
    const b_planet = document.getElementById('b_planet');
    const s_planet = document.getElementById('s_planet');
    const heading = document.getElementById('heading');
    const light = document.getElementById('light');
    let b_planetHeight;
    let s_planetRight;
    let s_planetTop;
    let s_planetHeight;
    let headingTop;
    let headingLeft;
    let headingFontSize;
    let lightTop;
    let lightLeft;
    let lightHeight;

    //original value
    function originalval() {
        b_planetHeight = parseInt(getComputedStyle(b_planet).height);
        s_planetRight = parseInt(getComputedStyle(s_planet).right);
        s_planetTop = parseInt(getComputedStyle(s_planet).top);
        s_planetHeight = parseInt(getComputedStyle(s_planet).height);
        headingTop = parseInt(getComputedStyle(heading).top);
        headingLeft = parseInt(getComputedStyle(heading).left);
        headingFontSize = parseInt(getComputedStyle(heading).fontSize);
        lightTop = parseInt(getComputedStyle(light).top);
        lightLeft = parseInt(getComputedStyle(light).left);
        lightHeight = parseInt(getComputedStyle(light).height);
    }
    originalval();
    document.addEventListener('scroll', () => {
        let scroll = window.scrollY;

        b_planet.style.left = -scroll * 3.5 + 'px';
        b_planet.style.bottom = -scroll * 3.5 + 'px';
        b_planet.style.height = b_planetHeight + scroll * 4 + 'px';

        s_planet.style.right = s_planetRight - scroll * 5 + 'px';
        s_planet.style.top = s_planetTop + scroll * 1 + 'px';
        s_planet.style.height = s_planetHeight + scroll * 1.5 + 'px';

        heading.style.top = headingTop - scroll * 0.1 + 'px';
        heading.style.left = headingLeft - scroll * 0.6 + 'px';
        heading.style.fontSize = headingFontSize - scroll * 0.009 + 'px';

        light.style.top = lightTop - scroll * 1.5 + 'px';
        light.style.left = lightLeft - scroll * 1.25 + 'px';
        light.style.height = lightHeight + scroll * 4 + 'px';
    })

    //media Queries
    window.matchMedia("(max-width: 425px)").addListener(function(e) {
        if (e.matches) {
            b_planet.style.height = '75vh';
            s_planet.style.top = '20%';
            s_planet.style.height = '12vh';
            light.style.top = '60%';
            light.style.left = '10%';
            light.style.height = '15em';
            heading.style.fontSize = '10vw';
            heading.style.left = '20%';
            heading.style.top = '40%';
            heading.style.color = 'white';
            originalval();
        }
    });
    window.matchMedia("(max-width: 658px) and (min-width:424px)").addListener(function(e) {
        if (e.matches) {
            b_planet.style.height = '75vh';

            s_planet.style.top = '20%';
            s_planet.style.height = '12vh';

            light.style.top = '30%';
            light.style.left = '-7%';
            light.style.height = '30em';
            originalval();
        }
    });
    window.matchMedia("(min-width:658px)").addListener(function(e) {
        if (e.matches) {
            light.style.top = '10%';
            light.style.left = '0';
            light.style.height = '35em';
            heading.style.fontSize = '7vw';
            heading.style.left = '25%';
            heading.style.top = '50%';
            b_planet.style.height = '100vh';
            b_planet.style.bottom = '0';
            s_planet.style.height = '20vh';
            s_planet.style.right = '10%';
            s_planet.style.top = '40%';
            originalval();
        }
    });
}