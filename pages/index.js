import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/LayoutDefault';
import UserNav from '../components/navigation/User';

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

export default function Home(props) {
  const { user, origin } = props;

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: 'auto',
    textAlign: 'center',
  };

  return (
    <Layout title="Chat bot | Home Page" url={origin} origin={origin}>
      <div className="mx-auto w-full max-w-md py-72 ">
        <div className="ml-40 pb-8 -mt-48">
          <img
            className="h-auto w-auto"
            src={process.env.PUBLIC_URL + 'assets/images/chat-bot-1.png'}
          />
        </div>
        <form className="px-8 pt-6 pb-8 mb-4 pd-12">
          <div className="flex items-center justify-between mt-2 mr-2 ml-2">
            <p className=""></p>
            <p className="">
              ยังไม่บัญชีผู้ใช้ ?
              <a
                href="register"
                className="text-black no-underline hover:text-green-500"
              >
                สมัครสมาชิก
              </a>
            </p>
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance border rounded w-full py-4 px-4 text-gray-700 leading-tight"
              id="#"
              type="text"
              placeholder="ชื่อผู้ใช้"
            ></input>
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance border rounded w-full py-4 px-4 text-gray-700 leading-tight"
              id="#"
              type="password"
              placeholder="รหัสผ่าน"
            ></input>
          </div>
          <div className="text-center">
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-3"
              type="button"
            >
              LOGIN
            </button>
            <a href="#" className="text-gray-400 hover:text-gray-800 pl-72">
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
