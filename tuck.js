const a = [2, 3, 1, 4, 2];

function waiting(list) {
    setTimeout(() => {
        console.log(list);
        console.log(list[0]);
        list.shift()
        if (list.lenght > 0) {
            waiting(list);

        }
    }, time * 1000)
}

waiting(a);