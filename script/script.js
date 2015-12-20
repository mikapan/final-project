var margin = {t:40,r:120,b:40,l:120};
var width = document.getElementById('plot').clientWidth - margin.r - margin.l,
    height = document.getElementById('plot').clientHeight - margin.t - margin.b;

var canvas = d3.select('.plot')
    .append('svg')
    .attr('width',width+margin.r+margin.l)
    .attr('height',height + margin.t + margin.b)
    .append('g')
    .attr('class','canvas')
    .attr('transform','translate('+margin.l+','+margin.t+')');



//Scale for the size of the circles
var scaleR = d3.scale.sqrt().domain([0,150]).range([0,100]);

/*var colorScale = d3.scale.ordinal()
 .range(['beige','red'])
 .range([0,150]);*/

d3.csv('data/total_coal_consumption.csv', parse, dataLoaded);

function dataLoaded(err,rows){


    var year = 1980;
    rows.sort(function(a,b){
        //Note: this is called a "comparator" function
        //which makes sure that the array is sorted from highest to lowest
        return b[year] - a[year];
    });

    var all = rows.slice(0,233);

    //Call the draw function
    draw(all, year);

    //TODO: fill out this function
    d3.selectAll('.btn-group .year').on('click',function(){

        var year = d3.select(this).attr("id");
        console.log("Show all countries for: " + year);

        if (year == 'year-1980')
        {
            var year = 1980;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('1');
        }

        else if (year == 'year-1981')
        {
            var year = 1981;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('2');
        }

        else if (year == 'year-1982')
        {
            var year = 1982;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('3');
        }

        else if (year == 'year-1983')
        {
            var year = 1983;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('4');
        }

        else if (year == 'year-1984')
        {
            var year = 1984;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('5');
        }

        else if (year == 'year-1985')
        {
            var year = 1985;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('6');
        }

        else if (year == 'year-1986')
        {
            var year = 1986;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('7');
        }

        else if (year == 'year-1987')
        {
            var year = 1987;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('8');
        }

        else if (year == 'year-1988')
        {
            var year = 1988;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('9');
        }

        else if (year == 'year-1989')
        {
            var year = 1989;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('10');
        }

        else if (year == 'year-1990')
        {
            var year = 1990;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('11');
        }

        else if (year == 'year-1991')
        {
            var year = 1991;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('12');
        }
        else if (year == 'year-1992')
        {
            var year = 1992;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('13');
        }

        else if (year == 'year-1993')
        {
            var year = 1993;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('14');
        }

        else if (year == 'year-1994')
        {
            var year = 1994;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('15');
        }

        else if (year == 'year-1995')
        {
            var year = 1995;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('16');
        }

        else if (year == 'year-1996')
        {
            var year = 1996;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('17');
        }

        else if (year == 'year-1997')
        {
            var year = 1997;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('18');
        }

        else if (year == 'year-1998')
        {
            var year = 1998;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('19');
        }

        else if (year == 'year-1999')
        {
            var year = 1999;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('20');
        }

        else if (year == 'year-2000')
        {
            var year = 2000;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('21');
        }

        else if (year == 'year-2001')
        {
            var year = 2001;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('22');
        }

        else if (year == 'year-2002')
        {
            var year = 2002;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('23');
        }

        else if (year == 'year-2003')
        {
            var year = 2003;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('24');
        }

        else if (year == 'year-2004')
        {
            var year = 2004;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('25');
        }

        else if (year == 'year-2005')
        {
            var year = 2005;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('26');
        }

        else if (year == 'year-2006')
        {
            var year = 2006;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('27');
        }

        else if (year == 'year-2007')
        {
            var year = 2007;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('28');
        }

        else if (year == 'year-2008')
        {
            var year = 2008;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('29');
        }

        else if (year == 'year-2009')
        {
            var year = 2009;
            rows.sort(function (a, b)
            {return b[year] - a[year];});
            var all = rows.slice(0, 233);
            draw(all, year);
            console.log('30');
        }
        console.log(all);

    });
}

function draw(rows, year){
    //TODO: Complete drawing function, accounting for enter, exit, update
    //Note that this function requires two parameters

    var nodes = canvas. selectAll('.country')
        .data(rows, function(d)
        {
            return d.country
        });
    var nodesEnter = nodes
        .enter()
        .append('g')
        .attr('class','country');

    nodesEnter
        .append('circle')

        .attr('r', function(d)
        {
            return scaleR(d[year]);
        })
        .style('fill','rgba(160,3,3,.3)')

    nodesEnter
        .append('text')
        .text(function(d)
        {
            return d.country
        })
        .attr('class','label')
        .attr('text-anchor','middle')
        .style('font-size','12px')
        .style('fill','black');
    nodesEnter
        .append('text')
        .text(function(d)
        {
            return d[year]
        })
        .attr('class','count')
        .attr('text-anchor','middle')
        .attr('y',20)
        .style('font-size','11px')
        .style('fill','black');
    //exit set
    nodes
        .exit().remove();
    //update set
    nodes
        .transition()
        .duration(1500)
        .attr('transform',function(d,i)
        {
            return 'translate('+ width/7*i+','+100+')';
        })


        .select('circle')
        .attr('r',function(d)
        {
            return scaleR(d[year]);
        })

    d3.selectAll('.count')
        .text(function(d)
        {
            return d[year];
        })
}



function parse(row){
    //@param row is each unparsed row from the dataset
    return {
        country: row['Country'],
        1980: +row['1980'], 1981: +row['1981'], 1982: +row['1982'], 1983: +row['1983'],
        1984: +row['1984'], 1985: +row['1985'], 1986: +row['1986'], 1987: +row['1987'],
        1988: +row['1988'], 1989: +row['1989'], 1990: +row['1990'], 1991: +row['1991'],
        1992: +row['1992'], 1993: +row['1993'], 1994: +row['1994'], 1995: +row['1995'],
        1996: +row['1996'], 1997: +row['1997'], 1998: +row['1998'], 1999: +row['1999'],
        2000: +row['2000'], 2001: +row['2001'], 2002: +row['2002'], 2003: +row['2003'],
        2004: +row['2004'], 2005: +row['2005'], 2006: +row['2006'], 2007: +row['2007'],
        2008: +row['2008'], 2009: +row['2009']
    };

    }