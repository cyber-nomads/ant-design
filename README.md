# Important

:warning: This is fork from [Antd@4.9.3](https://github.com/ant-design/ant-design) with custom config and tweaks. 

-----> **[ORIGINAL PROJECT](https://github.com/ant-design/ant-design)** <------


## 📦 Install

```bash
npm install @cybernomads/antd-fork
```

```bash
yarn add @cybernomads/antd-fork
```

## 🔨 Usage

```jsx
import { Button, DatePicker } from '@cybernomads/antd-fork';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

And import style manually:

```jsx
import '@cybernomads/antd-fork/dist/antd.css'; // or '@cybernomads/antd-fork/dist/antd.less'
```

## 🔨 Deploy

```
npm run build
```