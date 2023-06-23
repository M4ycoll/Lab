import { useState } from 'react'
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { message, Space, Tabs } from 'antd';
import type { CSSProperties } from 'react';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          subTitle=""
          actions={
            <Space>
              
              otros métodos de inicio de sesión
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
          submitter={{
            searchConfig: {
              submitText: 'Login',
            },
          }}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'Account'} />
            <Tabs.TabPane key={'phone'} tab={'Mobile'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'admin or user'}
                rules={[
                  {
                    required: true,
                    message: 'Ingrese el usuario!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'passsword'}
                rules={[
                  {
                    required: true,
                    message: 'Ingrese la contraseña！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'Mobile number'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter mobile number!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '¡Número de teléfono mal formado!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'Captcha'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'seconds'}`;
                  }
                  return 'Captcha';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Captcha!',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('¡Obtenga el código de verificación con éxito! El código de verificación es: 1234');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
            Keep me logged in
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Forgot password
            </a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Login;