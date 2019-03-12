<template>
  <div style="display:flex width:1515px;height:885px;padding:20px 0 0 20px;">
    <div class="left" style="width:400px;float:left">
      <div class="home" id="myChart" style="width:350px;height:270px">
      </div>
      <div class="home" id="myChart2" style="width:350px;height:270px">
      </div>
      <div class="home" id="myChart3" style="width:350px;height:270px">
      </div>
    </div>
    <div class="center" style="float:left">
      <div class="map">
      </div>
      <div class="count">
        <div class="into">
          <span>进水水量</span>
          <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>
        <div class="into">
          <span>产水水量</span>
          <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>
        <div class="into">
          <span>耗电量</span>
          <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>
      </div>
      <div class="msg">
        <i></i>
        <span>信息列表</span>
      </div>
      <div class="formlist">
        <table style="border-collapse:collapse;">
          <thead>
            <th>流水号</th>
            <th>指令类型</th>
            <th>操作时间</th>
            <th>操作人</th>
          </thead>
          <tbody>
            <tr>
              <td>00000</td>
              <td>参数查询</td>
              <td> 2018-06-15 10:07:44</td>
              <td>超级管理员</td>
            </tr>
            <tr>
              <td>000000</td>
              <td>参数查询</td>
              <td> 2018-06-15 10:07:44</td>
              <td>超级管理员</td>
            </tr>
            <tr>
              <td>00000</td>
              <td>参数查询</td>
              <td> 2018-06-15 10:07:44</td>
              <td>超级管理员</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="right" style="float:left">
      <div class="selects" style="display:flex;">
        时间
        <select style="width:150px; margin-left:20px; text-align:center">
          <option value="">12</option>
          <option value="">23</option>
          <option value="">34</option>
        </select>
      </div>
      <div class="msg">
        <i></i>
        <span>基本信息</span>
      </div>
      <div class="message">
        <ul class="left">
          <li>
            <span class="set">设置生产工作时间</span>
          </li>
          <li>
            <span class="setOnline">设置在线率</span>
          </li>
          <li>
            <span class="setSta">设置实时状态</span>
          </li>
          <li>
            <span class="water">总处理水量</span>
          </li>
        </ul>
        <ul class="right">
          <li>
            <i class="time">70小时</i>
          </li>
          <li>
            <i class="on">95%</i>
          </li>
          <li>
            <i class="sta">在线</i>
          </li>
          <li>
            <i class="xt">XT</i>
          </li>
        </ul>
      </div>
      <div class="msg">
        <i></i>
        <span>报警统计</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.center {
  width: 705px;
  // border: 1px solid red;
  padding: 30px 0 0 20px;
  .map {
    width: 698px;
    height: 436px;
    border: 1px solid yellowgreen;
  }
  .formlist {
    table {
      width: 699px;
      height: 163px;
      thead {
        background: rgb(220, 238, 190);
        border: 1px solid #9fc660;
        th {
          color: #333333;
          height: 40px;
        }
      }
      tbody {
        background-color: rgb(250, 255, 243);
        td {
          color: #6fa313;
          border: 1px solid #9fc660;
          width: 25%;
        }
      }
    }
  }
  .count {
    display: flex;

    > div {
      margin: 15px 10px 0 0;
      border-radius: 5px;
      width: 227px;
      height: 123px;
      background-color: rgb(220, 238, 190);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ul {
        list-style: none;
        padding: 0;
        li {
          float: left;
          margin: 0 5px;
          width: 20px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: #fff;
          background: linear-gradient(
            180deg,
            rgba(159, 198, 95, 1),
            white,
            rgba(159, 198, 95, 1)
          );
        }
      }
    }
  }
}
.right,
.center {
  .msg {
    margin: 15px 0;
    display: flex;
    span {
      line-height: 18px;
      font-size: 16px;
    }
    i {
      display: inline-block;
      background-color: green;
      width: 4px;
      height: 18px;
      margin: 0 10px 0 0;
      border-radius: 2px;
    }
  }
}
.right {
  padding: 20px 0 0 10px;

  .message {
    width: 352px;
    height: 158px;
    background-color: rgb(250, 255, 243);
    position: relative;
    ul {
      text-align: left;
      &.left {
        position: absolute;
        left: 0;
        top: 0;
      }
      &.right {
        position: absolute;
        left: 200px;
        top: 0;
      }
      padding: 0;
      margin: 0;
      li {
        padding-left: 20px;
        line-height: 39px;
        height: 25%;
        list-style: none;
        span,
        i {
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }
}
</style>

<script>
import { getPipeDefectData } from "./api";
export default {
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart.setOption({
        title: {
          // text: 'PH值(PH)',
          subtext: "PH值(PH)"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最大ph值", "最小ph值"]
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "9:00",
            "10:00",
            "11:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "6"
          }
        },
        series: [
          {
            name: "源水",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10, 8, 7],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
          },
          {
            name: "一级浓缩液",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0, 4, 5],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          },
          {
            name: "二级浓缩液",
            type: "line",
            data: [6, 8, 9, 11, 8, 6, 7, 7, 9],
            markPoint: {
              data: [{ name: "周最低", value: 6, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          }
        ]
      });
      myChart2.setOption({
        title: {
          // text: 'PH值(PH)',
          subtext: "PH值(PH)"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最大ph值", "最小ph值"]
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "9:00",
            "10:00",
            "11:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "6"
          }
        },
        series: [
          {
            name: "源水",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10, 8, 7],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
          },
          {
            name: "一级浓缩液",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0, 4, 5],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          },
          {
            name: "二级浓缩液",
            type: "line",
            data: [6, 8, 9, 11, 8, 6, 7, 7, 9],
            markPoint: {
              data: [{ name: "周最低", value: 6, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          }
        ]
      });
      myChart3.setOption({
        title: {
          // text: 'PH值(PH)',
          subtext: "PH值(PH)"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最大ph值", "最小ph值"]
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "9:00",
            "10:00",
            "11:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "6"
          }
        },
        series: [
          {
            name: "源水",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10, 8, 7],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
          },
          {
            name: "一级浓缩液",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0, 4, 5],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          },
          {
            name: "二级浓缩液",
            type: "line",
            data: [6, 8, 9, 11, 8, 6, 7, 7, 9],
            markPoint: {
              data: [{ name: "周最低", value: 6, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},

            //     ]
            // }
          }
        ]
      });
      getPipeDefectData().then(({data}) => {
                console.log(data)
            }).catch(err => {
               console.log(err);
            });
    }
  }
};
</script>
