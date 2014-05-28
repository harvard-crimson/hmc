var controller;
$(document).ready(function () {
    controller = new ScrollMagic();
    height_top=$('#article-header').height();
    var chart = new Highcharts.Chart({
        plotOptions: {
            series: {
                animation: {
                    duration: 2000,
                    easing: 'swing'
                }
            }
        },
        chart: {
            renderTo: container,
            backgroundColor: 'rgba(255,255,255,0)',
            width: $(window).width(),
            height: $(window).height()-$('header').height()//-$('#article-header').height()
        },
        title: {
            text: 'Endowment Returns',
            margin: -50
        },
        xAxis:  { 
            labels: {
                x: 0,
                y: 12
            },
            minPadding: 0,
            maxPadding: 0,
            tickPosition: 'inside',
            tickmarkPlacement: 'on',   
            tickInterval: 1,    
            startOnTick: true,       
            categories: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013']},
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#000'
                },
            },
                        minPadding: 0,
            maxPadding: 0,
            ceiling: 30,
            floor: -30,
            tickInterval: 10,
            gridLineColor:'rgba(0,0,0,.03)',
            title: {
                text: 'Yearly Returns',
                style: {
                    color: '#000'
                }
            }

        }], 
        legend: {
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            layout: 'vertical',
            itemWidth: 80,
            x: 0,
            y: 120
        },

        series: [{
            type: 'area',
            name: 'Difference',
            data: [8.8,5.4,2.5,1.2,17,0.9,5.5,9.5,6,5.9,6,5.8,11.6,-8.6,-0.9,2.2,0.25,-0.4],
            negativeColor: '#FF0000',
            color: '#02c326',
            fillOpacity: .5,
            lineHeight: 0,
            enableMouseTracking: false,
            marker: {
                    enabled: false
                }
            }, {
            name: 'Harvard',
            type: 'line',
            data: [26,25.8,20.5,12.2,30,-2.7,-0.5,12.5,21.1,15.2,16.7,23,8.6,-27.3,11,21.4,-0.05,11.3],
            marker: {
                    enabled: false
                },
            color: '#a70500'


        }, {
            type: 'line',
            name: 'NACUBO',
            data: [17.2,20.4,18,11,13,-3.6,-6,3,15.1,9.3,10.7,17.2,-3,-18.7,11.9,19.2,-0.3,11.7],
            marker: {
                    enabled: false
                },
            color: '#000'
        }],
    });

    $(window).resize(function() 
    {    
        chart.setSize(
           $(window).width(), 
           220.0,
           false
        );   
    });

    setTimeout(function() {
        chart.setSize(
           $(window).width(), 
           $(window).height()-$('#article-header').height(),
           animation= {
                    duration: 1200
                }
        );
        chart.chartBackground.css({
            color: '#fff',
        });
        chart.redraw();
        $('#container').css('opacity',.9);
    }, 2500);

    $('#article').css('margin-bottom', 220.0 + 'px');
    $('#article-header').css('height', '456px')

    var hasPlotBand = false;
    var $button = $('#button');
    controller = new ScrollMagic();

    var scene = new ScrollScene({triggerElement: "#container", duration: 200})
        .on("start end", function (e) {
                if (!hasPlotBand) {
                    chart.xAxis[0].addPlotBand({
                        from: 5,
                        to: 7,
                        color: '#FCFFC5',
                        id: 'plot-band-1'
                    });
                    $button.html('Remove plot band');
                } else {
                    chart.xAxis[0].removePlotBand('plot-band-1');
                }
                hasPlotBand = !hasPlotBand;
            })
        .addTo(controller);

        controller = new ScrollMagic();

    $(".context-quote-wrapper").each(function(index, element) {
        var $quote = $(element).children('.context-quote');
        var tween;
        if ($(element).hasClass('context-quote-right'))
            tween = TweenMax.to($quote, 1.5, {opacity: 1, right: 0, ease: Cubic.easeOut});
        else
            tween = TweenMax.to($quote, 1.5, {opacity: 1, left: 0, ease: Cubic.easeOut});
        var scene = new ScrollScene({triggerElement: $quote.children('.context-quote-trigger')})
                        .setTween(tween)
                        .addTo(controller);
    });

});