function validate(f) {
    f = f.elements;
    for (var c = 0, i = f.length - 1; i > -1; --i)
        if (f[i].name && /^where\[\d+\]$/.test(f[i].name) && f[i].checked)++c;
    if (c < 3) alert('Please select at least three places where you use headphones on Question No. 2.');
    return c > 3;
}

