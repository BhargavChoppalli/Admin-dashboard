import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons"
import { Card, Space, Statistic, Table, Typography } from "antd"
import {  } from "antd/es/color-picker";
import { useEffect, useState } from "react";
import { getRecentOrders } from "../../API";

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal">
      <DashboardCard  icon = {<ShoppingCartOutlined style={{
         color: "green",
         backgroundColor:"rgba(0,255,0,0.25)",
         borderRadius: 20,
         fontSize: 24,
         padding: 8}}/>} title = {"Orders"}    value = {12345}/>
      <DashboardCard icon = {<ShoppingOutlined style={{
         color: "blue",
         backgroundColor:"rgba(0,0,255,0.25)",
         borderRadius: 20,
         fontSize: 24,
         padding: 8}}/>}  title = {"Inventory"} value = {12345}/>
      <DashboardCard icon = {<UserOutlined style={{
         color: "purple",
         backgroundColor:"rgba(0,255,255,0.25)",
         borderRadius: 20,
         fontSize: 24,
         padding: 8}}/>}  title = {"Customers"} value = {12345}/>
      <DashboardCard icon = {<DollarCircleOutlined style={{
         color: "red",
         backgroundColor:"rgba(255,0,0,0.25)",
         borderRadius: 20,
         fontSize: 24,
         padding: 8,
         boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
         }}/>}  title = {"Revenue"}   value = {12345}/>
      </Space>
    
      <Space>
        <RecentOrders/>
      </Space>
      </Space>
     
  )
}

function DashboardCard({title,value,icon}){
  return(
      <Card className="Card">
        <Space direction="horizontal">
          {icon}
           
           <Statistic title = {title} value={value}/>
         </Space>
      </Card>

  )
}

function RecentOrders(){
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getRecentOrders().then((res) => {
          setDataSource(res.products);
          setLoading(false);

    })

  }, [])

  return(
    <>
    <Typography.Text>RecentOrders</Typography.Text>
    <Table
    columns={[
      {
        title: "Title",
        dataIndex: "title",
      },

      {
        title: "Quantity",
        dataIndex: "quantity",
      },

      {
        title: "Price",
        dataIndex: "discountedPrice",
         
      }

    ]}
    loading = {loading}
    dataSource = {dataSource}
    ></Table>
    </>
  );
}

export default Dashboard;
