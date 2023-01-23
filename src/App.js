import { Select, Space, Typography } from "antd";
import { useState } from "react";
function App() {
  const [salaryFrom, setSalaryFrom] = useState(null);
  const [salaryTo, setSalaryTo] = useState(null);

  const salaryRange = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    9000,
    10000
  ];
  return (
    <div className="App">
      <Typography.Title>Select Salary Range</Typography.Title>
      <Space direction="horizontal" size={12}>
        <Typography.Text>From: </Typography.Text>
        <Select
          value={salaryFrom}
          onChange={(value) => {
            setSalaryFrom(value);
            if (value > salaryTo) {
              setSalaryTo(null);
            }
          }}
          placeholder="salary from"
          options={salaryRange.map((salary) => {
            return {
              label: `$${salary}`,
              value: salary
            };
          })}
        />
        <Typography.Text>To: </Typography.Text>

        <Select
          value={salaryTo}
          onChange={(value) => {
            setSalaryTo(value);
          }}
          placeholder="salary to"
          options={salaryRange
            .map((salary) => {
              return {
                label: `$${salary}`,
                value: salary
              };
            })
            .filter((salary) => salary.value >= salaryFrom)}
        />
      </Space>
    </div>
  );
}
export default App;
