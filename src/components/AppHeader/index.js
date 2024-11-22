import { Badge, Space,  Input } from "antd";
import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";

function AppHeader() {
  return (
    <div className="AppHeader">
      <h4>Hi, Welcome</h4>
      
      {/* Replacing Admin Dashboard title with search bar */}
      <Input.Search
        placeholder="Search..."
        enterButton
        style={{ width: 300, marginBottom: 10 }}
        onSearch={(value) => console.log(value)} // You can handle the search logic here
      />
      
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
        <div className="user">
        <UserOutlined style={{ fontSize: 24 }} />
        </div>
      </Space>
    </div>
  );
}

export default AppHeader;
