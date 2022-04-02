let myChart = document.getElementById('myChart').getContext('2d');

axios.get('http://localhost:5000/visualize')
.then(data=>{
    let _data = data.data.data
    let label = _data.map(_item => _item._id)
    let _dataset = _data.map(_item => _item.count)
    console.log(_dataset,label)
    Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:label,
        datasets:[{
          label:'COUNT OF HURRICANES',
          data:[
            ..._dataset
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(25, 206, 86, 0.6)',
            'rgba(175, 192, 192, 0.6)',
            'rgba(53, 102, 255, 0.6)',
            'rgba(5, 159, 64, 0.6)',
            'rgba(255, 9, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'NO OF HURRICANES OCCURED IN EACH YEAR',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}).catch(err=>{
    console.log(err)
})













// Global Options
