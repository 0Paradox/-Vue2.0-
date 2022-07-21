const express = require('express')
const app = express()
const port = 8080



app.all('/permission/getTable', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    tableData: [
      {
        course: 'oppo',
        totalCost: '22000',
        thisMonthCost: '3500',
      },
      {
        course: 'vivo',
        totalCost: '24000',
        thisMonthCost: '2200',
      },
      {
        course: '苹果',
        totalCost: '65000',
        thisMonthCost: '4500',
      },
      {
        course: '小米',
        totalCost: '45000',
        thisMonthCost: '6500',
      },
      {
        course: '三星',
        totalCost: '34000',
        thisMonthCost: '2000',
      },
      {
        course: '魅族',
        totalCost: '22000',
        thisMonthCost: '3000',
      },
    ],
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/permission/getCount', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    countData: [{
      name: '今日支付订单',
      value: '1234',
      icon: 'success',
      color: '#2ec7c9',
    },
    {
      name: '今日收藏订单',
      value: '1234',
      icon: 'star-on',
      color: '#Ed9121',
    },
    {
      name: '今日未支付订单',
      value: '1234',
      icon: 'error',
      color: '#ff461f',
    },
    {
      name: '昨日支付订单',
      value: '1234',
      icon: 'success',
      color: '#2ec7c9',
    },
    {
      name: '昨日收藏订单',
      value: '1234',
      icon: 'star-on',
      color: '#Ed9121',
    },
    {
      name: '昨日未支付订单',
      value: '1234',
      icon: 'error',
      color: '#ff461f',
    }]
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/permission/getline', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    options: {
      title: {
        text: '当月销量'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['oppo', 'vivo', '苹果', '小米', '三星', '魅族']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',

        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
      },
      series: [
        {
          name: 'oppo',
          type: 'line',

          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'vivo',
          type: 'line',

          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '苹果',
          type: 'line',

          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '小米',
          type: 'line',

          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '三星',
          type: 'line',

          data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
          name: '魅族',
          type: 'line',

          data: [360, 227, 632, 584, 369, 1342, 785]
        }
      ]
    }
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/permission/getBar', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    options: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '活跃用户',
          data: [580, 675, 300, 285, 456, 765, 884],
          type: 'bar',
          showBackground: true,
          stack: 'Ad',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        },
        {
          name: '新增用户',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          stack: 'Ad',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        },
      ]
    }
  }

  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/permission/getPie', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    options: {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '小米' },
            { value: 735, name: '三星' },
            { value: 580, name: '苹果' },
            { value: 484, name: 'vivo' },
            { value: 300, name: 'oppo' },
            { value: 180, name: '魅族' }
          ]
        }
      ]
    }
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/operateFormLabel', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    operateFormLabel: [
      {
        model: 'name',
        label: '姓名',
        type: 'input'
      },
      {
        model: 'age',
        label: '年龄',
        type: 'input'
      },
      {
        model: 'sex',
        label: '性别',
        type: 'select',
        opts: [
          {
            label: '男',
            value: 1
          },
          {
            label: '女',
            value: 0
          }
        ],
      },
      {
        model: 'birth',
        label: '出生日期',
        type: 'date'
      },
      {
        model: 'addr',
        label: '地址',
        type: 'input'
      },
    ]
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/', (req, res) => {
  //接受所有来源请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  //接受所有请求头类型
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.listen(port, () => {
  console.log(`Example app listening on port`)
})