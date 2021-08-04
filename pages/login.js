import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/LayoutDefault';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas);

import {
  Carousel,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Input,
  Card,
} from 'antd';

const { Text, Title } = Typography;

const { TextArea } = Input;

export default function Login(props) {
  const { user, origin } = props;

  return (
    <Layout title="Government | Login Page" url={origin} origin={origin}>
      {/* <div className="mx-auto text-black rounded-xl shadow-xl w-96">
        <TextArea
          placeholder="ชื่อ-สกุล"
        />
        <Button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full h-8 text-white bg-transparent font-bold items-center justify-center hover:bg-white-500 hover:text-white py-2 px-4 border border-white-500 ">
          ขอใบเสนอราคา
        </Button>
      </div> */}
      <div className="mx-auto w-full max-w-sm py-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-between mt-2 mr-2 ml-2">
            <p className="">
              <a href="/" className="text-black no-underline hover:text-green-500">
                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} className="mr-1" />
                กลับหน้าหลัก
              </a>
            </p>
            <p className="">
              ยังไม่บัญชีผู้ใช้ ?
              <a href="register" className="text-black no-underline hover:text-green-500">
                สมัครสมาชิก
              </a>
            </p>
          </div>
          <div className="text-left mt-8">
            <p className="text-xl font-bold">เข้าสู่ระบบ</p>
            <p className="text-gray-400 text-opacity-100">
              เข้าสู่ระบบเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
            </p>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex mt-6">
            <label className="flex items-center">
              <p className="">
                <input type="checkbox" className="form-checkbox mr-2"></input>จดจำฉัน
              </p>
            </label>
          </div>
          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
              type="button"
            >
              เข้าสู่ระบบ
            </button>
            <a href="#" className="text-gray-400 hover:text-gray-800">
              ลืมรหัสผ่าน?
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
    },
  };
}
