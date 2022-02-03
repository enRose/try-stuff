import { Form, Input, Button, InputNumber, Row, Card, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { StateCtx } from '../../store'
import { Gifs, logGif } from '../../shared/util/logger'

const { Title } = Typography


export const RegisterCard: React.FC = () => {
	const [lamports, setLamports] = useState(0)

	const navigate = useNavigate()

	const { congrats, sayMyName } = useContext(StateCtx)


	const onFinish = (values: any) => {
		logGif(values, 'RegisterCard', Gifs.LaserEyeCat)

		setLamports(lamports+1)
	}

	return (
		<Row justify='center' align='middle'>
			<Card title="" bordered={false} style={{ width: 500 }}>

				<Title level={2}>Welcome {sayMyName}</Title>

				<Form
					layout="vertical"
					name="login-form"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label="Credit card number"
						name="ccNumber"
						rules={[{ required: true, type: 'number', message: 'Please input your credit card number!' }]}
					>
						<Input placeholder="Credit card number" />
					</Form.Item>

					<Form.Item name={['user', 'cvc']} label="cvc"
						rules={[{
							required: true, type: 'number', min: 0, max: 999,
							message: 'Please input your cvc!'
						}]}>
						<InputNumber placeholder="cvc" />
					</Form.Item>

					<Form.Item name={['user', 'expiry']} label="expiry"
						rules={[{
							required: true, type: 'number', min: 0, max: 99,
							message: 'Please input your expiry!'
						}]}>
						<InputNumber placeholder="expiry" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Submit
						</Button>

					</Form.Item>
				</Form>
			</Card>
		</Row>
	)
}

export default RegisterCard