import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/LayoutDefault';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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

export default function Register(props) {
  const { user, origin } = props;

  return (
    <Layout title="Government | Register Page" url={origin} origin={origin}>
      <div className="ml-4 mt-4">
        <a href="/" className="text-black no-underline hover:text-green-500">
          <FontAwesomeIcon
            icon={['fas', 'long-arrow-alt-left']}
            className="mr-1"
          />
          <FontAwesomeIcon icon="fa-solid fa-left-long" />
          กลับหน้าหลัก
        </a>
      </div>
      <div className="mx-auto w-full max-w-lg py-14">
        <p class="text-center text-4xl">สมัครสมาชิก</p>
        <p class="text-center text-3xl w-full">
          สมัครสมาชิกเพื่อทดลองใช้งานระบบ
        </p>
        <form className="bg-white shadow-lg rounded px-12 pt-10 pb-8 mb-4 -m-10 mt-8">
          <div className="text-left mt-4">
            <p className="text-xl font-bold mb-8">กรอกข้อมูลส่วนตัว</p>
          </div>
          <div className="mb-6 space-x-4">
            <input
              className="shadow appearance-none border rounded w-60 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="ชื่อ"
            ></input>
            <input
              className="shadow appearance-none border rounded w-60 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="นามสกุล"
            ></input>
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="รหัสผ่าน"
            ></input>
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
            ></input>
          </div>
          <div className="text-center">
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 rounded mr-96 mt-2"
              type="button"
            >
              Register
            </button>
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
