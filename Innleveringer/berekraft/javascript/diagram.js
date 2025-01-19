diagram2()
diagram5()

function diagram5() {
    
    const ctx = document.getElementById('myChart5');
    var polarColors = ["#b5e2fa","#eddea4","#ffa5ab", "#a25ed5"]

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Ku', 'Sau', 'Gris', 'Kylling'],
            datasets: [{
                label: 'Kg Co2 per 1kg kjøtt',
                data: [66.39, 39.72, 12.31, 9.87 ],
                borderWidth: 1,
                backgroundColor: polarColors,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    }

    function diagram2() {
    
        const ctx = document.getElementById('myChart2');
        var linjeColors = ["#a25ed5"]
        
        new Chart(ctx, {
            type: 'line',// takk felix for hjelpen
            data: {
                labels: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'July', 'Agust', 'September', 'Oktober', 'November', 'Desember'],
                datasets: [{
                    label: '10 min i dysjen koster kr',
                    data: [5.93, 4.45, 4.40, 4.06, 2.73, 2.77, 2.23, 1.64, 1.87, 2.85, 3.76, 4.14],
                    
                    borderWidth: 1,
                    backgroundColor: linjeColors,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        }